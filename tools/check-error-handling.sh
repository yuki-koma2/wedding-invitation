#!/bin/bash
# Description: Check error handling consistency across API routes
# Note: Requires ripgrep (rg)

# Function to print a separator line
print_separator() {
    echo "----------------------------------------"
}

# Color codes for better readability
COLOR_FILE="\033[1;34m"    # Blue
COLOR_OK="\033[1;32m"      # Green
COLOR_WARN="\033[1;33m"    # Yellow
COLOR_ERROR="\033[1;31m"   # Red
COLOR_RESET="\033[0m"       # Reset to default

echo -e "${COLOR_FILE}Checking error handling consistency in API routes:${COLOR_RESET}"
print_separator

# Find all TypeScript API route files
api_files=$(rg --files-with-matches 'export default async function' src/pages/api --type typescript)

if [ -z "$api_files" ]; then
    echo -e "${COLOR_WARN}No API route files found.${COLOR_RESET}"
    exit 0
fi

# Initialize summary counters
total_files=0
files_with_catch=0
files_with_detailed=0
files_with_generic=0
files_with_res500=0

# Iterate over each API route file
for file in $api_files; do
    total_files=$((total_files + 1))
    echo -e "${COLOR_FILE}File: $file${COLOR_RESET}"

    # Check if 'catch' block exists
    catch_blocks=$(rg -c 'catch \(.*\) \{' "$file")
    if [ "$catch_blocks" -eq 0 ]; then
        echo -e "  ${COLOR_ERROR}Error: No 'catch' block found.${COLOR_RESET}"
        continue
    else
        echo -e "  ${COLOR_OK}Found $catch_blocks 'catch' block(s).${COLOR_RESET}"
        files_with_catch=$((files_with_catch + 1))
    fi

    # Check for 'res.status(...).json(...)' inside 'catch' blocks
    detailed_handling=$(rg 'catch \(.*\) \{\s*res\.status\(\d+\)\.json\(' "$file")
    if [ -n "$detailed_handling" ]; then
        echo -e "  ${COLOR_OK}  Detailed error handling with res.status(...).json(...).${COLOR_RESET}"
        files_with_detailed=$((files_with_detailed + 1))
    else
        echo -e "  ${COLOR_WARN}  Warning: No detailed error handling found (res.status(...).json(...)).${COLOR_RESET}"
    fi

    # Check for generic error handling (console.error and res.status(500))
    generic_handling=$(rg 'catch \(.*\) \{\s*console\.error\(' "$file")
    if [ -n "$generic_handling" ]; then
        echo -e "  ${COLOR_OK}  Generic error handling with console.error(...).${COLOR_RESET}"
        files_with_generic=$((files_with_generic + 1))
    else
        echo -e "  ${COLOR_WARN}  Warning: No generic error handling found (console.error(...)).${COLOR_RESET}"
    fi

    # Check if 'res.status(500)' is present
    res500=$(rg 'res\.status\(500\)' "$file")
    if [ -n "$res500" ]; then
        echo -e "  ${COLOR_OK}  Res.status(500) found.${COLOR_RESET}"
        files_with_res500=$((files_with_res500 + 1))
    else
        echo -e "  ${COLOR_WARN}  Warning: res.status(500) not found.${COLOR_RESET}"
    fi

    print_separator
done

# Summary
echo -e "${COLOR_FILE}Error Handling Check Summary:${COLOR_RESET}"
print_separator

echo "Total API route files checked: $total_files"
echo "Files with 'catch' blocks: $files_with_catch"
echo "Files with detailed error handling (res.status(...).json(...)): $files_with_detailed"
echo "Files with generic error handling (console.error(...)): $files_with_generic"
echo "Files with res.status(500): $files_with_res500"
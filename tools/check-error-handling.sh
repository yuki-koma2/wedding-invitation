#!/bin/bash
# Description: Check error handling consistency across API routes
# brew install ripgrep (rg)

# Function to print a separator line
print_separator() {
    echo "----------------------------------------"
}

# Color codes for better readability
COLOR_FILE="\033[1;34m"    # Blue
COLOR_LINE="\033[1;32m"    # Green
COLOR_RESET="\033[0m"       # Reset to default

# Test 1: Look for 'catch' blocks in API routes
echo -e "${COLOR_FILE}Checking for 'catch' blocks in API routes:${COLOR_RESET}"
print_separator
rg --type typescript 'catch \(.*\) \{' src/pages/api -n | while IFS=: read -r file line code; do
    echo -e "${COLOR_FILE}File:${COLOR_RESET} $file, ${COLOR_LINE}Line:${COLOR_RESET} $line"
    echo "    $code"
    echo
done

# Test 2: Look for 'catch' blocks that handle errors by sending a response
echo -e "${COLOR_FILE}Checking for detailed error handling in API routes (e.g., res.status(...).json(...)):${COLOR_RESET}"
print_separator
rg --type typescript 'catch \(.*\) \{\s*res\.status\(\d+\)\.json\(' src/pages/api -n | while IFS=: read -r file line code; do
    echo -e "${COLOR_FILE}File:${COLOR_RESET} $file, ${COLOR_LINE}Line:${COLOR_RESET} $line"
    echo "    $code"
    echo
done

# Test 3: Summary of catch blocks
echo -e "${COLOR_FILE}Summary of 'catch' blocks in API routes:${COLOR_RESET}"
print_separator
total_catch_blocks=$(rg --type typescript 'catch \(.*\) \{' src/pages/api -n | wc -l)
detailed_catch_blocks=$(rg --type typescript 'catch \(.*\) \{\s*res\.status\(\d+\)\.json\(' src/pages/api -n | wc -l)
echo "Total 'catch' blocks found: $total_catch_blocks"
echo "Detailed 'catch' blocks (with res.status(...).json(...)): $detailed_catch_blocks"
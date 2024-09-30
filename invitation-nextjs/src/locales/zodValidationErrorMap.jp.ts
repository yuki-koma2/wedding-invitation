import { ZodErrorMap, ZodIssueCode, ZodParsedType } from "zod";

const japaneseErrorMap: ZodErrorMap = (issue, _ctx) => {
    let message: string;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "必須項目です";
            } else {
                message = `型が無効です。期待される型: ${issue.expected}、受け取った型: ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `リテラルが一致しません。期待される値: ${JSON.stringify(issue.expected)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `認識されないキーがあります: ${issue.keys.join(", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `入力が無効です`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `識別子の値が無効です。期待される値: ${issue.options.join(", ")}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `列挙型の値が無効です。期待される値: ${issue.options
                .map((val) => `'${val}'`)
                .join(", ")}、受け取った値: '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `関数の引数が無効です`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `関数の戻り値の型が無効です`;
            break;
        case ZodIssueCode.invalid_date:
            message = `無効な日付です`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `無効な入力です: "${issue.validation.includes}"を含む必要があります`;
                    if (typeof issue.validation.position === "number") {
                        message += `。位置: ${issue.validation.position}以降`;
                    }
                } else if ("startsWith" in issue.validation) {
                    message = `無効な入力です: "${issue.validation.startsWith}"で始まる必要があります`;
                } else if ("endsWith" in issue.validation) {
                    message = `無効な入力です: "${issue.validation.endsWith}"で終わる必要があります`;
                } else {
                    message = "無効な文字列です";
                }
            } else {
                switch (issue.validation) {
                    case "email":
                        message = "有効なメールアドレスを入力してください";
                        break;
                    case "url":
                        message = "有効なURLを入力してください";
                        break;
                    case "uuid":
                        message = "有効なUUIDを入力してください";
                        break;
                    case "regex":
                        message = "無効な形式です";
                        break;
                    case "cuid":
                        message = "有効なCUIDを入力してください";
                        break;
                    case "cuid2":
                        message = "有効なCUID2を入力してください";
                        break;
                    case "ulid":
                        message = "有効なULIDを入力してください";
                        break;
                    case "ip":
                        message = "有効なIPアドレスを入力してください";
                        break;
                    case "datetime":
                        message = "有効な日時を入力してください";
                        break;
                    default:
                        message = "無効な文字列です";
                        break;
                }
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `配列の要素数が足りません。${issue.minimum}個以上${
                    issue.exact ? "である必要があります" : "が必要です"
                }`;
            else if (issue.type === "string")
                message = `文字列が短すぎます。${issue.minimum}文字以上${
                    issue.exact ? "である必要があります" : "が必要です"
                }`;
            else if (issue.type === "number")
                message = `数値が小さすぎます。${issue.minimum}${
                    issue.inclusive ? "以上" : "より大きい"
                }必要があります`;
            else if (issue.type === "date") {
                const minimum = typeof issue.minimum === "bigint" ? Number(issue.minimum) : issue.minimum;
                message = `日付が早すぎます。${new Date(minimum).toLocaleString()}${
                    issue.inclusive ? "以降" : "より後"
                }である必要があります`;
            } else message = "値が小さすぎます";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `配列の要素数が多すぎます。${issue.maximum}個以下${
                    issue.exact ? "である必要があります" : "でなければなりません"
                }`;
            else if (issue.type === "string")
                message = `文字列が長すぎます。${issue.maximum}文字以下${
                    issue.exact ? "である必要があります" : "でなければなりません"
                }`;
            else if (issue.type === "number")
                message = `数値が大きすぎます。${issue.maximum}${
                    issue.inclusive ? "以下" : "未満"
                }である必要があります`;
            else if (issue.type === "date") {
                const maximum = typeof issue.maximum === "bigint" ? Number(issue.maximum) : issue.maximum;
                message = `日付が遅すぎます。${new Date(maximum).toLocaleString()}${
                    issue.inclusive ? "以前" : "より前"
                }である必要があります`;
            } else message = "値が大きすぎます";
            break;
        case ZodIssueCode.custom:
            message = "無効な入力です";
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `交差型の結果をマージできません`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `値は${issue.multipleOf}の倍数である必要があります`;
            break;
        case ZodIssueCode.not_finite:
            message = "値は有限でなければなりません";
            break;
        default:
            message = "無効な入力です";
            break;
    }
    return { message };
};

export default japaneseErrorMap;
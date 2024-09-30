import { z } from 'zod';
import { prefectureCodes } from "@/models/prefectureCode";
import japaneseErrorMap from "@/locales/zodValidationErrorMap.jp";

// custom error message
z.setErrorMap(japaneseErrorMap)

// サイド（新郎側・新婦側）のEnum
export const SideEnum = z.enum(['GROOM', 'BRIDE']);

// 出欠ステータスのEnum
export const AttendanceStatusEnum = z.enum(['ATTENDING', 'NOT_ATTENDING', 'PENDING']);

export const GuestSchema = z.object({
    id: z.number().int().positive().optional(), // 新規作成時は不要
    firstName: z.string().min(1, '名を入力してください'),
    lastName: z.string().min(1, '姓を入力してください'),
    firstNameKana: z.string().min(1, '名（ふりがな）を入力してください').regex(/^[ぁ-んー　]*$/, 'ひらがなで入力してください'),
    lastNameKana: z.string().min(1, '姓（ふりがな）を入力してください').regex(/^[ぁ-んー　]*$/, 'ひらがなで入力してください'),
    side: SideEnum,
    postalCode: z
        .string()
        .regex(/^(\d{3}-?\d{4})$/, '郵便番号は123-4567か1234567の形式で入力してください')
        .optional()
        .or(z.literal('')),
    prefectureCode: z
        .number()
        .int()
        .positive('都道府県を選択してください')
        .refine((code) => prefectureCodes.includes(code), {
            message: '無効な都道府県です',
        }),
    city: z.string().optional().or(z.literal('')),
    addressLine: z.string().optional().or(z.literal('')),
    attendanceStatus: AttendanceStatusEnum,
});

export type Guest = z.infer<typeof GuestSchema>;
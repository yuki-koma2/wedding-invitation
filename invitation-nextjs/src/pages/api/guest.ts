import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "@/lib/prisma";
import { GuestSchema } from "@/components/GuestForm/guest.schema";
import { ZodError } from "zod";

// POST /api/guest
export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({message: `Method ${req.method} Not Allowed`});
    }

    try {
        // TODO リクエストボディのパースとバリデーション フロントと同じなので変えたい。
        const data = GuestSchema.parse(req.body);

        // データベースへの挿入
        const newGuest = await prisma.guest.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                firstNameKana: data.firstNameKana,
                lastNameKana: data.lastNameKana,
                side: data.side,
                postalCode: data.postalCode || null,
                prefectureCode: data.prefectureCode,
                city: data.city || null,
                addressLine: data.addressLine || null,
                attendanceStatus: data.attendanceStatus,
            },
        });

        return res.status(201).json({message: 'データを保存しました', guest: newGuest});
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: '入力データに誤りがあります',
                errors: error.errors.map((e) => ({
                    path: e.path.join('.'),
                    message: e.message,
                })),
            });
        }
        // TODO error handling
        console.error('サーバーエラー:', error);
        return res.status(500).json({message: 'サーバーエラーが発生しました'});
    }
}
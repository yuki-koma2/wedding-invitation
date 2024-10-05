import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "@/lib/prisma";

// POST /api/user
export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const result = await prisma.user.create({
        data: {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
        },
    })
    return res.status(201).json(result);
}
import { PrismaClient } from '@prisma/client'

// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient }

const prisma = globalForPrisma.prisma || new PrismaClient({
    log: process.env.NODE_ENV === 'production'
        ? ['error', 'warn']
        : ['query', 'info', 'warn', 'error'],
})

if (process.env.NODE_ENV !== 'production') {
    // 開発環境では、グローバルオブジェクトにPrismaClientインスタンスを保存
    globalForPrisma.prisma = prisma;
}

export default prisma

// ts-ignore 7017 is used to ignore the error that the global object is not
// defined in the global scope. This is because the global object is only
// defined in the global scope in Node.js and not in the browser.

import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices


// declare global {
//     // グローバルオブジェクトに PrismaClient のインスタンスを保存
//     var prisma: PrismaClient | undefined;
// }

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // 必要に応じてログレベルを調整
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma

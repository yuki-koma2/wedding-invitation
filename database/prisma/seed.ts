import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // ユーザーの作成
    const user1 = await prisma.user.create({
        data: {
            email: 'user1@example.com',
            name: 'ユーザー1',
            profile: {
                create: {
                    bio: 'これはユーザー1のプロフィールです。',
                },
            },
            posts: {
                create: [
                    {
                        title: 'ユーザー1の最初の投稿',
                        content: 'これはユーザー1の最初の投稿内容です。',
                        published: true,
                    },
                    {
                        title: 'ユーザー1の2番目の投稿',
                        content: 'これはユーザー1の2番目の投稿内容です。',
                        published: false,
                    },
                ],
            },
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user2@example.com',
            name: 'ユーザー2',
            profile: {
                create: {
                    bio: 'これはユーザー2のプロフィールです。',
                },
            },
            posts: {
                create: [
                    {
                        title: 'ユーザー2の投稿',
                        content: 'これはユーザー2の投稿内容です。',
                        published: true,
                    },
                ],
            },
        },
    });

    console.log('ダミーデータの挿入が完了しました。');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
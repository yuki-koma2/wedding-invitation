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

    const createdUsersCount = await prisma.user.count();
    const createdPostsCount = await prisma.post.count();
    console.log(`🎉 おめでとうございます！${createdUsersCount}人のユーザーと${createdPostsCount}件の投稿が無事にデータベースに引っ越しました。データベースパーティーの始まりです！🎊`);
}

main()
    .catch((e) => {
        console.error('おっと！データの種まきに失敗しました。エラー詳細:', e.message);
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

process.on('SIGTERM', async () => {
    console.log('優雅に終了します...');
    await prisma.$disconnect();
    process.exit(0);
});
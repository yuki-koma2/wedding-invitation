import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const count = await prisma.mstPrefCode.count();
    console.log(`現在の都道府県データ数: ${count}件`);

    const prefectures = [
        { code: 1, name: '北海道', abbreviation: 'HK' },
        { code: 2, name: '青森県', abbreviation: 'AO' },
        { code: 3, name: '岩手県', abbreviation: 'IT' },
        { code: 4, name: '宮城県', abbreviation: 'MG' },
        { code: 5, name: '秋田県', abbreviation: 'AK' },
        { code: 6, name: '山形県', abbreviation: 'YG' },
        { code: 7, name: '福島県', abbreviation: 'FS' },
        { code: 8, name: '茨城県', abbreviation: 'IB' },
        { code: 9, name: '栃木県', abbreviation: 'TC' },
        { code: 10, name: '群馬県', abbreviation: 'GU' },
        { code: 11, name: '埼玉県', abbreviation: 'ST' },
        { code: 12, name: '千葉県', abbreviation: 'CB' },
        { code: 13, name: '東京都', abbreviation: 'TY' },
        { code: 14, name: '神奈川県', abbreviation: 'KN' },
        { code: 15, name: '新潟県', abbreviation: 'NI' },
        { code: 16, name: '富山県', abbreviation: 'TM' },
        { code: 17, name: '石川県', abbreviation: 'IS' },
        { code: 18, name: '福井県', abbreviation: 'FI' },
        { code: 19, name: '山梨県', abbreviation: 'YN' },
        { code: 20, name: '長野県', abbreviation: 'NA' },
        { code: 21, name: '岐阜県', abbreviation: 'GI' },
        { code: 22, name: '静岡県', abbreviation: 'SZ' },
        { code: 23, name: '愛知県', abbreviation: 'AI' },
        { code: 24, name: '三重県', abbreviation: 'ME' },
        { code: 25, name: '滋賀県', abbreviation: 'SI' },
        { code: 26, name: '京都府', abbreviation: 'KY' },
        { code: 27, name: '大阪府', abbreviation: 'OS' },
        { code: 28, name: '兵庫県', abbreviation: 'HG' },
        { code: 29, name: '奈良県', abbreviation: 'NR' },
        { code: 30, name: '和歌山県', abbreviation: 'WA' },
        { code: 31, name: '鳥取県', abbreviation: 'TT' },
        { code: 32, name: '島根県', abbreviation: 'SM' },
        { code: 33, name: '岡山県', abbreviation: 'OY' },
        { code: 34, name: '広島県', abbreviation: 'HS' },
        { code: 35, name: '山口県', abbreviation: 'YA' },
        { code: 36, name: '徳島県', abbreviation: 'TK' },
        { code: 37, name: '香川県', abbreviation: 'KA' },
        { code: 38, name: '愛媛県', abbreviation: 'EH' },
        { code: 39, name: '高知県', abbreviation: 'KO' },
        { code: 40, name: '福岡県', abbreviation: 'FO' },
        { code: 41, name: '佐賀県', abbreviation: 'SG' },
        { code: 42, name: '長崎県', abbreviation: 'NS' },
        { code: 43, name: '熊本県', abbreviation: 'KU' },
        { code: 44, name: '大分県', abbreviation: 'OI' },
        { code: 45, name: '宮崎県', abbreviation: 'MZ' },
        { code: 46, name: '鹿児島県', abbreviation: 'KG' },
        { code: 47, name: '沖縄県', abbreviation: 'OK' },
    ];


    for (const prefecture of prefectures) {
        await prisma.mstPrefCode.upsert({
            where: { code: prefecture.code },
            update: {},
            create: prefecture,
        });
    }

    const countALL = await prisma.mstPrefCode.count();

    console.log(`🎉 おめでとうございます！${countALL}件の都道府県データが無事にデータベースに引っ越しました。データベースパーティーの始まりです！🎊`);
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
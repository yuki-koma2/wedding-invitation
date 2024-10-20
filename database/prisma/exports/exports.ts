import { PrismaClient } from '@prisma/client';

import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const prisma = new PrismaClient();

async function exportDataToCSV() {
    const guests = await prisma.guest.findMany({
        include: {
            prefecture: true, // 関連する都道府県コードのデータも含める
        },
    });

    console.log('Exporting data to CSV...');
    // CSVライターを設定
    const csvWriter = createCsvWriter({
        path: './outputs/guests.csv', // 出力するCSVファイルのパス
        header: [
            { id: 'id', title: 'ID' },
            { id: 'firstName', title: 'First Name' },
            { id: 'lastName', title: 'Last Name' },
            { id: 'firstNameKana', title: 'First Name Kana' },
            { id: 'lastNameKana', title: 'Last Name Kana' },
            { id: 'side', title: 'Side' },
            { id: 'postalCode', title: 'Postal Code' },
            { id: 'prefecture', title: 'Prefecture' },
            { id: 'city', title: 'City' },
            { id: 'addressLine', title: 'Address Line' },
            { id: 'attendanceStatus', title: 'Attendance Status' },
        ]
    });

    // guests sample data
    // const guests = [
    //     {
    //         id: 1,
    //         firstName: 'Taro',
    //         lastName: 'Yamada',
    //         firstNameKana: 'タロウ',
    //         lastNameKana: 'ヤマダ',
    //         side: 'bride',
    //         postalCode: '123-4567',
    //         prefecture: {
    //             name: 'Tokyo'
    //         },
    //         city: 'Shinjuku',
    //         addressLine: '1-2-3',
    //         attendanceStatus: 'attending'
    //     },
    //     {
    //         id: 2,
    //         firstName: 'Hanako',
    //         lastName: 'Suzuki',
    //         firstNameKana: 'ハナコ',
    //         lastNameKana: 'スズキ',
    //         side: 'groom',
    //         postalCode: '234-5678',
    //         prefecture: {
    //             name: 'Osaka'
    //         },
    //         city: 'Umeda',
    //         addressLine: '4-5-6',
    //         attendanceStatus: 'not attending'
    //     }
    // ];

    // prefectureをフラットにしてCSVに書き込むデータを準備
    const records = guests.map(guest => ({
        id: guest.id,
        firstName: guest.firstName,
        lastName: guest.lastName,
        firstNameKana: guest.firstNameKana,
        lastNameKana: guest.lastNameKana,
        side: guest.side,
        postalCode: guest.postalCode,
        prefecture: guest.prefecture.name, // 都道府県名
        city: guest.city,
        addressLine: guest.addressLine,
        attendanceStatus: guest.attendanceStatus,
    }));

    // データを書き込む
    await csvWriter.writeRecords(records);
}

exportDataToCSV()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
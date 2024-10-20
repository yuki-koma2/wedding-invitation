import { PrismaClient } from '@prisma/client';

import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const prisma = new PrismaClient();

async function exportDataToCSV() {
    const guests = await prisma.guest.findMany({
        include: {
            prefecture: true,
        },
    });

    console.log('Exporting data to CSV...');

    const csvWriter = createCsvWriter({
        path: './outputs/guests.csv',
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

    await csvWriter.writeRecords(records);
}

exportDataToCSV()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
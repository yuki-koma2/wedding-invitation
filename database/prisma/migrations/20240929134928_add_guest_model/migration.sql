-- CreateEnum
CREATE TYPE "Side" AS ENUM ('GROOM', 'BRIDE');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('ATTENDING', 'NOT_ATTENDING', 'PENDING');

-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "firstNameKana" VARCHAR(255) NOT NULL,
    "lastNameKana" VARCHAR(255) NOT NULL,
    "side" "Side" NOT NULL,
    "postalCode" VARCHAR(7),
    "prefectureCode" INTEGER NOT NULL,
    "city" VARCHAR(255),
    "addressLine" VARCHAR(255),
    "attendanceStatus" "AttendanceStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mst_prefcode" (
    "code" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "abbreviation" CHAR(2) NOT NULL,

    CONSTRAINT "mst_prefcode_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE INDEX "IDX_GUEST_LASTNAME_FIRSTNAME" ON "Guest"("lastName", "firstName");

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_prefectureCode_fkey" FOREIGN KEY ("prefectureCode") REFERENCES "mst_prefcode"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

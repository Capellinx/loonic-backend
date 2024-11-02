/*
  Warnings:

  - You are about to drop the column `pasword` on the `managers` table. All the data in the column will be lost.
  - Added the required column `password` to the `managers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "managers" DROP COLUMN "pasword",
ADD COLUMN     "password" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `name` on the `managers` table. All the data in the column will be lost.
  - Added the required column `email` to the `managers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "managers" DROP COLUMN "name",
ADD COLUMN     "email" VARCHAR(250) NOT NULL;

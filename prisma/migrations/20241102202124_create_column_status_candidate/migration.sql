/*
  Warnings:

  - Added the required column `status` to the `candidates` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Satatus" AS ENUM ('Disponivel', 'Indisponivel', 'Em Processo');

-- AlterTable
ALTER TABLE "candidates" ADD COLUMN     "status" "Satatus" NOT NULL;

/*
  Warnings:

  - Changed the type of `status` on the `candidates` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Disponivel', 'Indisponivel', 'Em Processo');

-- AlterTable
ALTER TABLE "candidates" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL;

-- DropEnum
DROP TYPE "Satatus";

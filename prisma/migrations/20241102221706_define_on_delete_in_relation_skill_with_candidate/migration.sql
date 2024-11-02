-- DropForeignKey
ALTER TABLE "skills" DROP CONSTRAINT "skills_candidateId_fkey";

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "candidates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

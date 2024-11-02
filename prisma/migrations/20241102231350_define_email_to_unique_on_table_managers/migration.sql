/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `managers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "managers_email_key" ON "managers"("email");

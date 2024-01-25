/*
  Warnings:

  - Added the required column `favorite` to the `Expansion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `favorite` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Expansion" ADD COLUMN     "favorite" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "favorite" BOOLEAN NOT NULL;

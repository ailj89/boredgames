-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "gameId" INTEGER NOT NULL,
    "expansionId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isBaseGame" BOOLEAN NOT NULL,
    "numplays" INTEGER NOT NULL,
    "minplayers" INTEGER NOT NULL,
    "maxplayers" INTEGER NOT NULL,
    "releasedate" TIMESTAMP(3) NOT NULL,
    "acquired" TIMESTAMP(3) NOT NULL,
    "info" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expansion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,
    "isExpansion" BOOLEAN NOT NULL,
    "numplays" INTEGER NOT NULL,
    "minplayers" INTEGER NOT NULL,
    "maxplayers" INTEGER NOT NULL,
    "releasedate" TIMESTAMP(3) NOT NULL,
    "acquired" TIMESTAMP(3) NOT NULL,
    "info" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Expansion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_expansionId_fkey" FOREIGN KEY ("expansionId") REFERENCES "Expansion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expansion" ADD CONSTRAINT "Expansion_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

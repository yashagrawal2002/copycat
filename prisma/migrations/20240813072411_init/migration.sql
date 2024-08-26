-- CreateTable
CREATE TABLE "room" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "copydata" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "copydata_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "copydata" ADD CONSTRAINT "copydata_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

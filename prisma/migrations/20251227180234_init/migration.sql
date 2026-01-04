-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "priority" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

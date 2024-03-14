-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "settings" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

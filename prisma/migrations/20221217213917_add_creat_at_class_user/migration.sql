-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AUTHORISED', 'AWAITING_AUTHORISATION', 'REJECTED');

-- CreateTable
CREATE TABLE "Consent" (
    "consentId" TEXT NOT NULL,
    "expirationDateTime" TIMESTAMP(3) NOT NULL,
    "transactionFromDateTime" TIMESTAMP(3) NOT NULL,
    "transactionToDateTime" TIMESTAMP(3) NOT NULL,
    "loggedUserId" TEXT NOT NULL,
    "businessEntityId" TEXT NOT NULL,
    "permissions" TEXT[],
    "creationDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL DEFAULT 'AWAITING_AUTHORISATION',
    "statusUpdateDateTime" TIMESTAMP(3) NOT NULL,
    "linkId" TEXT,
    "metaId" TEXT,

    CONSTRAINT "Consent_pkey" PRIMARY KEY ("consentId")
);

-- CreateTable
CREATE TABLE "LoggedUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentId" TEXT NOT NULL,

    CONSTRAINT "LoggedUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessEntity" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentId" TEXT NOT NULL,

    CONSTRAINT "BusinessEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "identification" TEXT NOT NULL,
    "rel" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "self" TEXT NOT NULL,
    "first" TEXT NOT NULL,
    "prev" TEXT NOT NULL,
    "next" TEXT NOT NULL,
    "last" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meta" (
    "id" TEXT NOT NULL,
    "totalPages" INTEGER NOT NULL,
    "totalRecords" INTEGER NOT NULL,
    "requestDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Meta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Consent" ADD CONSTRAINT "Consent_loggedUserId_fkey" FOREIGN KEY ("loggedUserId") REFERENCES "LoggedUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consent" ADD CONSTRAINT "Consent_businessEntityId_fkey" FOREIGN KEY ("businessEntityId") REFERENCES "BusinessEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consent" ADD CONSTRAINT "Consent_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consent" ADD CONSTRAINT "Consent_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Meta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoggedUser" ADD CONSTRAINT "LoggedUser_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessEntity" ADD CONSTRAINT "BusinessEntity_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

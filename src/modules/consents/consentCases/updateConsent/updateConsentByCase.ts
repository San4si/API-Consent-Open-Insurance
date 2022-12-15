import { prisma } from "../../../../prisma/client";

export const UpdateConsentByCase = async (consentId: string, data: any) => {
  const consent = await prisma.consent.update({
    where: {
      consentId,
    },
    data,
    select: {
      consentId: true,
      creationDateTime: true,
      status: true,
      statusUpdateDateTime: true,
      permissions: true,
      transactionFromDateTime: true,
      transactionToDateTime: true,
      expirationDateTime: true,
    },
  });
  return consent;
};

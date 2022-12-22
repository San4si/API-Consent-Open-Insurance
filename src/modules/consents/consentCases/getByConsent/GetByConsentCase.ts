import { prisma } from "../../../../prisma/client";

export const GetByConsentCase = async (consentId: string) => {
  const consent = await prisma.consent.findUnique({
    where: {
      consentId,
    },
  });

  return consent;
};

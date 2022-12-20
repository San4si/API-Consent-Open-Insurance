import { prisma } from "../../../../prisma/client";

export const GetByConsentCase = async (consentId: string) => {
  const consentid = await prisma.consent.findUnique({
    where: {
      consentId,
    },
  });

  return consentid;
};

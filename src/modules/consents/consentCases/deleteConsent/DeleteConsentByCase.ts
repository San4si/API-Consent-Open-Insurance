import { prisma } from "../../../../prisma/client";

export const DeleteConsentByCase = async (consentId: string) => {
  await prisma.consent.delete({
    where: {
      consentId,
    },
  });
  return;
};

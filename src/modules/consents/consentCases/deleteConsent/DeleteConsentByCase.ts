import { prisma } from "../../../../prisma/client";

export const DeleteConsentByCase = async (consentId: string) => {
  await prisma.consent.update({
    where: {
      consentId,
    },
    data: { status: "REJECTED" },
  });
  return;
};

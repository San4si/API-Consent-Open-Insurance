import { prisma } from "../../../../prisma/client";

export const GetByDocumentCase = async (document: string) => {
  const consents = await prisma.consent.findMany({
    where: {
      loggedUser: {
        document: {
          identification: document,
        },
      },
    },
  });
  return consents;
};

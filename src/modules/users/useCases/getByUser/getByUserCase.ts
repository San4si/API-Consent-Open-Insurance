import { prisma } from "../../../../prisma/client";

export const GetByUserCase = async (id: string) => {
  const userid = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return userid;
};

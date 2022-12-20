import dayjs from "dayjs";
import { prisma } from "../prisma/client";

class GenerateRefreshToken {
  async execute(userId: string) {
    const expiresIn = dayjs().add(1, "h").unix();

    const generateRefreshToken = await prisma.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    });

    return generateRefreshToken;
  }
}

export { GenerateRefreshToken };

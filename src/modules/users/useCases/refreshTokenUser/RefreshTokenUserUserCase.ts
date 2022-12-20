import dayjs from "dayjs";
import { prisma } from "../../../../prisma/client";
import { GenerateRefreshToken } from "../../../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../../../provider/GenerateTokenProvider";

class RefreshTokenUserUseCase {
  async execute(refresh_token: string) {
    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });

    if (!refreshToken) {
      throw new Error("Refresh token invalid");
    }

    //Verifica se o refrestoken expirou
    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiresIn)
    );

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(refreshToken.userId);

    if (refreshTokenExpired) {
      await prisma.refreshToken.deleteMany({
        where: {
          userId: refreshToken.userId,
        },
      });

      const generateRefreshTokenProvider = new GenerateRefreshToken();
      const newRefreshToken = await generateRefreshTokenProvider.execute(
        refreshToken.userId
      );

      //Se o token estiver expired retorno
      return { token, refreshToken: newRefreshToken };
    }

    //Se o token nao estiver expirado retorno o token
    return { token };
  }
}

export { RefreshTokenUserUseCase };

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../prisma/client";
import { GenerateRefreshToken } from "../../../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../../../provider/GenerateTokenProvider";

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ email, password }: IRequest) {
    // Verificar se o usuario existe

    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!userAlreadyExists) {
      throw new Error("User or password incorrect 1");
    }

    // Verificar se a senha está correta

    const passwordMatch = await compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      throw new Error("User or password incorrect 2");
    }
    //Gerar token do usuário
    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(userAlreadyExists.id);

    await prisma.refreshToken.deleteMany({
      where: {
        userId: userAlreadyExists.id,
      },
    });

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(
      userAlreadyExists.id
    );
    return { token, refreshToken };
  }
}

export { AuthenticateUserUseCase };

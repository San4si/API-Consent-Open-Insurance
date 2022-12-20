import { hash } from "bcryptjs";
import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserCase {
  async execute({ name, email, password }: IUserRequest) {
    //Verificar se usuario existe
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exist!");
    }
    //Cadastra usuário
    const passwordHash = await hash(password, 8);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });
    return user;
    //Senha está correta
    //Gerar jsonwebtoken
  }
}

export { CreateUserCase };

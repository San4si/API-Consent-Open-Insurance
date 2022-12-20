import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetUserCase {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  }
}

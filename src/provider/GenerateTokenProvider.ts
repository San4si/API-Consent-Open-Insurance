import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, "clbsu6ti9000008l02v0y3tzz", {
      subject: userId,
      expiresIn: "1h",
    });

    return token;
  }
}

export { GenerateTokenProvider };

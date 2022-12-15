import { Consent } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetConsentByCase {
  async execute(): Promise<Consent[]> {
    const consents = await prisma.consent.findMany({
      orderBy: {
        creationDateTime: "desc",
      },
    });
    return consents;
  }
}

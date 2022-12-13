import { prisma } from "../../../../prisma/client";
import { CreateConsentDTO } from "../../dtos/createConsentDTO";

export class CreateConsentConsentCase {
  async execute({
    expirationDateTime,
    transactionFromDateTime,
    transactionToDateTime,
    loggedUserId,
    businessEntityId,
    permissions,
    linkId,
    metaId,
  }: CreateConsentDTO) {
    //Criar consentimento
    const consent = await prisma.consent.create({
      data: {
        expirationDateTime,
        transactionFromDateTime,
        transactionToDateTime,
        loggedUserId,
        businessEntityId,
        permissions,
        linkId,
        metaId,
      },
    });

    return consent;
  }
}

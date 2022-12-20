import { Consent } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateConsentDTO } from "../../dtos/createConsentDTO";
import { v4 as uuidv4 } from "uuid";
//import { Consent } from "../../../../entities";

export class CreateConsentConsentCase {
  async execute({
    expirationDateTime,
    transactionFromDateTime,
    transactionToDateTime,
    loggedUser,
    businessEntity,
    permissions,
  }: CreateConsentDTO) {
    const links = await prisma.link.create({
      data: {
        self: "https://65pwcy7ng5.execute-api.us-east-1.amazonaws.com//open-insurance/consents/v1",
        first:
          "https://65pwcy7ng5.execute-api.us-east-1.amazonaws.com//open-insurance/consents/v1",
        prev: "https://65pwcy7ng5.execute-api.us-east-1.amazonaws.com//open-insurance/consents/v1",
        next: "https://65pwcy7ng5.execute-api.us-east-1.amazonaws.com//open-insurance/consents/v1",
        last: "https://65pwcy7ng5.execute-api.us-east-1.amazonaws.com//open-insurance/consents/v1",
      },
    });
    const meta = await prisma.meta.create({
      data: {
        totalPages: 1,
        totalRecords: 1,
        requestDateTime: "2022-11-08T05:21:04.926Z",
      },
    });
    //Criar consentimento
    const consent = await prisma.consent.create({
      data: {
        consentId: "urn:mapfre:" + uuidv4(),
        expirationDateTime,
        transactionFromDateTime,
        transactionToDateTime,
        businessEntity: {
          create: {
            createdAt: businessEntity.createdAt,
            document: {
              create: {
                identification: businessEntity.document.identification,
                rel: businessEntity.document.rel,
              },
            },
          },
        },
        loggedUser: {
          create: {
            createdAt: loggedUser.createdAt,
            document: {
              create: {
                identification: loggedUser.document.identification,
                rel: loggedUser.document.rel,
              },
            },
          },
        },
        permissions,
        links: {
          connect: {
            id: links.id,
          },
        },
        meta: {
          connect: {
            id: meta.id,
          },
        },
      },
    });
    const data = await prisma.consent.findUnique({
      where: {
        consentId: consent.consentId,
      },
      select: {
        consentId: true,
        creationDateTime: true,
        status: true,
        statusUpdateDateTime: true,
        permissions: true,
        transactionFromDateTime: true,
        transactionToDateTime: true,
        expirationDateTime: true,
      },
    });

    return { data, links, meta };
  }
}

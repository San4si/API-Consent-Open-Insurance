import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const all = async (req: Request, res: Response) => {
  const data = await prisma.consent.findMany({
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
  if (data.length === 0) {
    return res.status(400).send({
      errors: [
        {
          code: 400,
          title: "Error",
          detail: "Não há dados no banco",
        },
      ],
    });
  }
  return res.send({ data });
};

export const create = async (req: Request, res: Response) => {
  const {
    expirationDateTime,
    transactionFromDateTime,
    transactionToDateTime,
    loggedUserId,
    businessEntityId,
    permissions,
    linkId,
    metaId,
  } = req.body;
  const result = await prisma.consent.create({
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
  res.json(result);
};

export const update = async () => {};

export const remove = async () => {};

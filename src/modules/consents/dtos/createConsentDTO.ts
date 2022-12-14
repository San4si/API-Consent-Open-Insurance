export interface CreateConsentDTO {
  expirationDateTime: string;
  transactionFromDateTime: string;
  transactionToDateTime: string;
  loggedUserId: string;
  businessEntityId: string;
  permissions: string;
  linkId: string;
  metaId: string;
}

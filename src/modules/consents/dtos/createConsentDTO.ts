import { BusinessEntity, LoggedUser } from "../../../entities";

export interface CreateConsentDTO {
  expirationDateTime: string;
  transactionFromDateTime: string;
  transactionToDateTime: string;
  loggedUser: LoggedUser;
  businessEntity: BusinessEntity;
  permissions: string[];
}

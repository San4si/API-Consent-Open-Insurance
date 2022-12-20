export interface LoggedUser {
  id: string;
  Consent: Consent[];
  createdAt: Date | string;
  document: Document;
  documentId: string;
}

export interface Consent {
  consentId: string;
  loggedUser: LoggedUser;
  businessEntity: BusinessEntity;
  expirationDateTime: string;
  transactionFromDateTime: string;
  transactionToDateTime: string;
  loggedUserId: string;
  businessEntityId: string;
  permissions: string[];
  creationDateTime: string;
  status: Status;
  statusUpdateDateTime: string;
  links: Link;
  meta: Meta;
  linkId: string;
  metaId: string;
}

export interface Document {
  id: string;
  identification: string;
  rel: string;
  LoggedUser: LoggedUser[];
  createdAt: Date | string;
  BusinessEntity: BusinessEntity[];
}

export interface BusinessEntity {
  id: string;
  Consent: Consent[];
  createdAt: Date | string;
  document: Document;
  documentId: string;
}

enum Status {
  AUTHORISED,
  AWAITING_AUTHORISATION,
  REJECTED,
}
//export interface Status {}

export interface Link {
  id: string;
  self: string;
  first: string;
  prev: string;
  next: string;
  last: string;
  Consent: Consent[];
}

export interface Meta {
  id: string;
  totalPages: number;
  totalRecords: number;
  requestDateTime: string;
  Consent: Consent[];
}

export interface User {
  id: String;
  name: String;
  email: String;
  password: String;
  document: Document;
  documentId: String;
}

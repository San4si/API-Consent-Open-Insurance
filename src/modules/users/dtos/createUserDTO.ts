import { Document } from "../../../entities";

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  document: Document;
}

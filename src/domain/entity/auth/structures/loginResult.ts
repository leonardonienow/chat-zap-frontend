import { User } from "../models";

export type LoginResult = {
  authorizationToken: string;
  user: User;
};

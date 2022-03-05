import { User } from "./";

export type Login = {
  isAuthenticated: boolean;
  user: User | null;
  authenticationToken: string;
};

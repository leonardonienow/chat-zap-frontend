import { LoginResult } from "../../entity/auth/structures";

export default interface AuthRepository {
  login(
    email: string,
    password: string
  ): Promise<LoginResult>;
}

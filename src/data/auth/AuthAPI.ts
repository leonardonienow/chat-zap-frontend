import AuthRepository from "../../domain/repository/auth/authRepository";
import { LoginResult } from "../../domain/entity/auth/structures";

export default class AuthAPI implements AuthRepository {
  login(email: string, password: string): Promise<LoginResult> {
    return new Promise((resolve, reject) => {
      if (email === "joedoe@email.com" && password === "password") {
        resolve({
          authorizationToken: "Bearer ASKJdsfjdijosd93wiesf93isef",
          user: {
            id: 0,
            email: "joedoe@email.com",
            name: "Joe Doe",
            password: "password",
          },
        });
      }

      reject("Email or password is not correct");
    });
  }
}

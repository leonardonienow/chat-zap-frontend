import { exitCode } from "process";
import AuthAPI from "../data/auth/AuthAPI";
const authAPI = new AuthAPI();

describe("Login", () => {
  it("should login", async () => {
    const result = await authAPI.login("joedoe@email.com", "password");
    expect(result.authorizationToken).toBeDefined();
  });

  it("should not login", async () => {
    await authAPI.login("test@email.com", "password").catch((err) => {
      expect(err).toEqual("Email or password is not correct");
    });
  });
});

export default {};

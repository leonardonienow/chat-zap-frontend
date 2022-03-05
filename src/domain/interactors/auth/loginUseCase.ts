import AuthRepository from "../../repository/auth/authRepository";


export default class LoginUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  public async login(email: string, password: string): Promise<void> {
    await this.authRepository
      .login(email, password)
      .then(() => {
        
      })
      .catch((error) => {
        console.log("Login failed");
        console.log(error);
      });
  }
}

import { inject, injectable } from "inversify";
import { UsersRepository } from "../../infrastrucure/entity/user.repository";

@injectable()
export class UserFindAll {
  constructor(
    @inject("USER_REPO")
    private readonly userRepository: UsersRepository
  ) {}
  public execute() {
    const users = this.userRepository.findAllMock();
    return users;
  }
}

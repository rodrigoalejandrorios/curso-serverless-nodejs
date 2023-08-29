import { inject, injectable } from "inversify";
import { UsersRepository } from "../../infrastrucure/entity/user.repository";

@injectable()
export class UserFindById {
  constructor(
    @inject("USER_REPO")
    private readonly userRepository: UsersRepository
  ) {}
  public execute(id: string) {
    const users = this.userRepository.findByIdMock(id);
    return users;
  }
}

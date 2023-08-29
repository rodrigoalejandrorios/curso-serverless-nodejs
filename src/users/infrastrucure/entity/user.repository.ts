import { inject, injectable } from "inversify";
import { findAllMock } from "../mock/find.all.mock";
import { UserService } from "../services/user.service";

@injectable()
export class UsersRepository {
  constructor(@inject(UserService) private readonly service: UserService) {}
  public findAllMock(): typeof findAllMock {
    return this.service.findAll();
  }

  public findByIdMock(userId: string): any {
    return this.service.findById(userId);
  }
}

import { injectable } from "inversify";
import { findAllMock } from "../mock/find.all.mock";

@injectable()
export class UsersRepository {
  public findAllMock(): typeof findAllMock {
    return findAllMock;
  }

  public findByIdMock(userId: string): (typeof findAllMock)[0] {
    return findAllMock.find(({ id }) => id === +userId);
  }
}

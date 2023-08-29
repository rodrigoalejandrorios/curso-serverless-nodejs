import {injectable } from "inversify";
import { findAllMock } from "../mock/find.all.mock";

@injectable()
export class UserService {
  public findAll() {
    return findAllMock;
  }

  public findById(uId: string) {
    return findAllMock.find(({ id }) => id === +uId);
  }
}

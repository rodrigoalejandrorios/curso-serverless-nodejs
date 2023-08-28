import "reflect-metadata";
import { Container } from "inversify";
import { UsersRepository } from "src/users/entity/user.repository";
import { UserService } from "src/users/services/user.service";

const container = new Container();
container.bind<UserService>(UserService).to(UserService);
container.bind<UsersRepository>("USER_REPO").to(UsersRepository);

export { container };

import { Container } from "inversify";
import "reflect-metadata";
import { UserService } from "../users/infrastrucure/services/user.service";
import { UsersRepository } from "../users/infrastrucure/entity/user.repository";
import { UserFindAll } from "../users/applications/find-all/findAll.use-case";
import { UserFindById } from "../users/applications/find-by-id/findById.use-case";

const container = new Container();

//Users
container.bind<UserService>(UserService).to(UserService);
container.bind<UsersRepository>("USER_REPO").to(UsersRepository);
container.bind<UserFindAll>(UserFindAll).to(UserFindAll);
container.bind<UserFindById>(UserFindById).to(UserFindById);

export { container };

import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { User } from "./entity/User";

createConnection().then(async connection => {
  const user = new User();
  user.myAge = 10;
  user.fullName = "hyeoksu han2";

  const userRepository = await getRepository(User);

  await userRepository.save(user);

}).catch(error => console.log("ERROR!!!!:", error));

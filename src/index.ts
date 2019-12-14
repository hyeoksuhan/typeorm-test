import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";

import { User } from "./entity/User";

createConnection().then(async connection => {
  const userRepository = getRepository(User);

  console.log(userRepository);
  
  let user = new User();
  user.firstName = "hyeoksu";
  user.lastName = "han";
  user.myAge = 100;
  
  await userRepository.save(user);

  console.log(await userRepository.find());
}).catch(error => console.log("ERROR!!!!:", error));

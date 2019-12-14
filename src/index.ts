import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";
import { Author } from "./entity/Author";

createConnection(
  {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [
      __dirname + "/entity/*.ts",
    ],
    // synchronize: true,
    logging: false,
  }
).then(async connection => {
  const photoRepository = connection.getRepository(Photo);
  const photoMetaRepository = connection.getRepository(PhotoMetadata);
  const authorRepository = connection.getRepository(Author);

  const allPhotos = await photoRepository.find();
  const author = new Author();
  author.name = "hshan";
  author.photos = allPhotos;

  const result = await authorRepository.save(author);
  console.log(result);

}).catch(error => console.log("ERROR!!!!:", error));

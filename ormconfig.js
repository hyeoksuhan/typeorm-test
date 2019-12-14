const srcRootDir = process.env.NODE_ENV === "production" ? "build" : "src";

console.log({srcRootDir});

module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "test",
  "password": "test",
  "database": "test",
  "entities": [
    srcRootDir + "/entity/**/*.{ts,js}"
  ],
  "migrations": [
    srcRootDir + "/migration/**/*.{ts,js}"
  ],
  "subscribers": [
    srcRootDir + "/subscriber/**/*.{ts,js}"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

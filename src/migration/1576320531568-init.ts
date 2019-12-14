import {MigrationInterface, QueryRunner} from "typeorm";

export class init1576320531568 implements MigrationInterface {
    name = 'init1576320531568'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `photo_metadata` (`id` int NOT NULL AUTO_INCREMENT, `height` int NOT NULL, `width` int NOT NULL, `orientation` varchar(255) NOT NULL, `compressed` tinyint NOT NULL, `comment` varchar(255) NOT NULL, `photoId` int NULL, UNIQUE INDEX `REL_99f01ed52303cc16139d69f746` (`photoId`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `photo` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) NOT NULL, `description` text NOT NULL, `filename` varchar(255) NOT NULL, `views` double NOT NULL, `isPublished` tinyint NOT NULL, `authorId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `author` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `myAge` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `photo_metadata` ADD CONSTRAINT `FK_99f01ed52303cc16139d69f7464` FOREIGN KEY (`photoId`) REFERENCES `photo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `photo` ADD CONSTRAINT `FK_c073d197b41cfbeb09835ca233c` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `photo` DROP FOREIGN KEY `FK_c073d197b41cfbeb09835ca233c`", undefined);
        await queryRunner.query("ALTER TABLE `photo_metadata` DROP FOREIGN KEY `FK_99f01ed52303cc16139d69f7464`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
        await queryRunner.query("DROP TABLE `author`", undefined);
        await queryRunner.query("DROP TABLE `photo`", undefined);
        await queryRunner.query("DROP INDEX `REL_99f01ed52303cc16139d69f746` ON `photo_metadata`", undefined);
        await queryRunner.query("DROP TABLE `photo_metadata`", undefined);
    }

}

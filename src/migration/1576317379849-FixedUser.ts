import {MigrationInterface, QueryRunner} from "typeorm";

export class FixedUser1576317379849 implements MigrationInterface {
    name = 'FixedUser1576317379849'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `fullName`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `fullName` varchar(255) NOT NULL", undefined);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class FixedUser1576317219127 implements MigrationInterface {
    name = 'FixedUser1576317219127'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `dob`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `dob` varchar(255) NOT NULL", undefined);
    }

}

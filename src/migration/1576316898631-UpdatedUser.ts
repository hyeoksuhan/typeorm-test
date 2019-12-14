import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatedUser1576316898631 implements MigrationInterface {
    name = 'UpdatedUser1576316898631'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `dob` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `dob`", undefined);
    }

}

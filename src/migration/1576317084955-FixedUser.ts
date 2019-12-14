import {MigrationInterface, QueryRunner} from "typeorm";

export class FixedUser1576317084955 implements MigrationInterface {
    name = 'FixedUser1576317084955'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `age` `myAge` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `myAge` `age` int NOT NULL", undefined);
    }

}

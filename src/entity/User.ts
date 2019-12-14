import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    age: number;

    @Column()
    dob: string;
}

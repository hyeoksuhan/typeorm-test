import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Photo, photo => photo.author, {
        cascade: true
    })
    photos: Photo[];
}

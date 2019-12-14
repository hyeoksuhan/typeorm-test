import { ManyToOne, OneToOne, Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {PhotoMetadata} from "./PhotoMetadata";
import { Author } from "./Author";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column("double")
    views: number;

    @Column()
    isPublished: boolean;

    @OneToOne(type => PhotoMetadata, metadata => metadata.photo, {
        cascade: true,
    })
    meta: PhotoMetadata;

    @ManyToOne(type => Author, author => author.photos)
    author: Author;
}

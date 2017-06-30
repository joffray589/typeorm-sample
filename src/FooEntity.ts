
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('foo')
export class FooEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    bar: number;

}
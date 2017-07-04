import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, AbstractEntity} from "typeorm";

@AbstractEntity()
export class EntityBase{

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    constructor(){

    }

}
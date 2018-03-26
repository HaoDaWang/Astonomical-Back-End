import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class imeis{
    @PrimaryGeneratedColumn()
    id:number = 0;

    @Column()
    imei:string = '';
}
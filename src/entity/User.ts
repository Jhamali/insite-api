import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm'
import uuidv4 from "uuid/v4"

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('varchar', {length: 255})
  email: string

  @Column('text')
  password: string

  @Column('bigint')
  timestamp: number

  @Column('text')
  user: string

  @Column({type:'text', default:'Command'})
  tty: string

  @Column('text')
  date: string

  @Column({type:'text', default:'127.0.1'})
  ip: string

  @Column({type:'text', default:'Command'})
  command: string

  @BeforeInsert()
  addId(){
    this.id = uuidv4();
    this.user = this.id.toString()
  }

  @BeforeInsert()
  getDate(){
    this.date = new Date().toString()
    this.timestamp = new Date().getTime()
  }
}

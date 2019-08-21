import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column('text')
  user: string

  @Column('text')
  tty: string

  @Column('text')
  date: string

  @Column('text')
  ip: string

  @Column('text')
  command: string
}

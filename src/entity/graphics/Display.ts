import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity('display')
export default class Display extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  connection: string

  @Column()
  main: boolean

  @Column()
  builtin: boolean

  @Column()
  model: string

  @Column()
  resolutionx: number

  @Column()
  resolutiony: number

  @Column()
  sizex: number

  @Column()
  sizey: number

  @Column()
  pixeldepth: number
}

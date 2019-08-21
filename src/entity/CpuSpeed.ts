import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity('cpuspeed')
export default class CpuSpeed extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  min: number

  @Column()
  max: number

  @Column()
  avg: number
}

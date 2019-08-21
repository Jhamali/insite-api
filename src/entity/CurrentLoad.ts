import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('currentload')
export default class CurrentLoad extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column('double')
  avgload: number

  @Column('double')
  currentload: number

  @Column('double')
  currentload_user: number

  @Column('double')
  currentload_system: number

  @Column('double')
  currentload_nice: number

  @Column('double')
  currentload_idle: number

  @Column('double')
  currentload_irq: number

  @Column('double')
  raw_currentload: number

  @Column('double')
  raw_currentload_user: number

  @Column('double')
  raw_currentload_system: number

  @Column('double')
  raw_currentload_nice: number

  @Column('double')
  raw_currentload_idle: number

  @Column('double')
  raw_currentload_irq: number
}

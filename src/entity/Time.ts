import { BaseEntity, Column, PrimaryColumn, Entity } from 'typeorm'

@Entity('time')
export default class Time extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column('bigint')
  current: number

  @Column('bigint')
  uptime: number

  @Column()
  timezone: string

  @Column()
  timezoneName: string
}

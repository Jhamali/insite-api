import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm'

@Entity('memory')
export default class Memory extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column('bigint')
  total: number

  @Column('bigint')
  free: number

  @Column('bigint', {
    default: 0.0,
  })
  use: number

  @Column('bigint')
  used: number

  @Column('bigint')
  active: number

  @Column('bigint')
  available: number

  @Column('bigint')
  buffcache: number

  @Column('bigint')
  swaptotal: number

  @Column('bigint')
  swapused: number

  @Column('bigint')
  swappercent: number
  @BeforeInsert()
  async calculatePercetages() {
    this.use = (this.used / this.total) * 100
    this.swappercent = (this.swapused / this.swaptotal) * 100
  }
}

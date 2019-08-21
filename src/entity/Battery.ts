import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm'

@Entity('battery')
export default class Battery extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column('tinyint')
  hasbattery: boolean

  @Column()
  cyclecount: number

  @Column('tinyint')
  ischarging: boolean

  @Column('bigint')
  maxcapacity: number

  @Column('bigint')
  currentcapacity: number

  @Column()
  percent: number

  @Column()
  timeremaining: number

  @Column('tinyint', {
    default: false,
  })
  aconnected: boolean

  @Column()
  type: string

  @Column()
  model: string

  @Column()
  manufacturer: string

  @Column()
  serial: string
}

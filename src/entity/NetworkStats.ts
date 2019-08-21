import { BaseEntity, PrimaryColumn, Column, Entity } from 'typeorm'

@Entity('networkstat')
export default class NetworkStat extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  operstate: string

  @Column('bigint')
  rx: number

  @Column('bigint')
  tx: number

  @Column('double')
  rx_sec: number

  @Column('double')
  tx_sec: number

  @Column()
  ms: number
}

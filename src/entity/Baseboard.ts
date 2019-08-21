import { BaseEntity, Column, PrimaryColumn, Entity } from 'typeorm'

@Entity('baseboard')
export default class Baseboard extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  manufacturer: string

  @Column()
  model: string

  @Column()
  version: string

  @Column()
  serial: string

  @Column()
  assetTag: string
}

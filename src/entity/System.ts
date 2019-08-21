import { BaseEntity, Column, PrimaryColumn, Entity } from 'typeorm'

@Entity('system')
export default class System extends BaseEntity {
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
  uuid: string

  @Column()
  sku: string
}

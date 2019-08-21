import { BaseEntity, Column, PrimaryColumn, Entity } from 'typeorm'

@Entity('bios')
export default class Bios extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  vendor: string

  @Column()
  version: string

  @Column()
  releaseDate: string

  @Column()
  revision: string
}

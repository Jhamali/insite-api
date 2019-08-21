import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('cpu')
export default class CPU extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  manufacturer: string

  @Column()
  brand: string

  @Column()
  vendor: string

  @Column()
  family: string

  @Column()
  model: string

  @Column()
  stepping: string

  @Column()
  revision: string

  @Column()
  voltage: string

  @Column()
  speed: string

  @Column()
  speedmin: string

  @Column()
  speedmax: string

  @Column()
  cores: number

  @Column('longtext')
  flags: string
}

import { BaseEntity, Column, PrimaryColumn, Entity } from 'typeorm'

@Entity('operatingsystem')
export default class OperatingSystem extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  platform: string

  @Column()
  distro: string

  @Column()
  release: string

  @Column()
  codename: string

  @Column()
  kernel: string

  @Column()
  arch: string

  @Column()
  hostname: string

  @Column()
  logofile: string
}

import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity('process')
export default class Process extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  pid: number

  @Column()
  name: string

  @Column()
  pcpu: number

  @Column()
  pcpuu: number

  @Column('double')
  pcpus: number

  @Column('double')
  pmem: number

  @Column()
  priority: number

  @Column()
  mem_vsz: number

  @Column()
  mem_rss: number

  @Column()
  nice: number

  @Column()
  started: string

  @Column()
  state: string

  @Column()
  tty: string

  @Column()
  user: string

  @Column('longtext')
  command: string
}

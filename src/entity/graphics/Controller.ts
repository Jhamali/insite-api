import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('controller')
export default class Controller extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  vendor: string

  @Column()
  model: string

  @Column()
  bus: string

  @Column()
  vram: number

  @Column()
  vramDynamic: boolean
}

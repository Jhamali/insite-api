import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm'

@Entity('client')
export default class Client extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryColumn('uuid')
  id: string

  @Column('bigint')
  lastTimestamp: number
}

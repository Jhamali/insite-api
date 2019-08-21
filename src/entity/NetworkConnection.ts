import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity('networkconnection')
export default class NetworkConnection extends BaseEntity {
  //Dummy Field to ensure primary key
  @PrimaryGeneratedColumn()
  datapoint_id: number

  @Column('uuid')
  id: string

  @Column('bigint')
  timestamp: number

  @Column()
  protocol: string

  @Column()
  localaddress: string

  @Column()
  localport: string

  @Column()
  peeraddress: string

  @Column()
  peerport: string

  @Column()
  state: string
}

import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BaseEntity,
} from 'typeorm'
import uuid from 'uuid/v4'

@Entity()
export class Network extends BaseEntity {
  @PrimaryColumn('uuid') id: string

  @Column()
  timestamp: number

  @BeforeInsert()
  addId() {
    this.id = uuid()
  }
}

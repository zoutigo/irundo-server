import moment from 'moment';
import 'moment-timezone';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

@Entity('shops')
export class Shop {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 100,
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    length: 500,
  })
  description: string;

  @Column('boolean', {
    default: false,
  })
  isOnCount: boolean;

  @Column('boolean', {
    default: false,
  })
  isPaused: boolean;

  @Column('varchar', {
    nullable: true,
    length: 20,
  })
  phone: boolean;

  @Column('json', {
    nullable: true,
  })
  employees: JSON;

  @Column('json', {
    default: [],
  })
  images: JSON;

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date;

  @BeforeUpdate()
  insertUpdate() {
    this.updatedAt = new Date(
      moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'),
    );
  }

  @BeforeInsert()
  insertCreated() {
    this.createdAt = new Date(
      moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'),
    );
    this.updatedAt = new Date(
      moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'),
    );
  }
}

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
  DeleteDateColumn,
} from 'typeorm';

@Entity('shops')
export class Shop {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({
    nullable: false,
  })
  description: string;

  @Column({
    default: false,
  })
  isOnCount: boolean;

  @Column({
    default: false,
  })
  isPaused: boolean;

  @Column({
    nullable: true,
  })
  phone: boolean;

  @Column('json', {
    default: [],
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

  @DeleteDateColumn({
    type: 'date',
  })
  deletedAt: Date;

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

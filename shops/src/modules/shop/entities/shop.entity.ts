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

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isOnCount: boolean;

  @Column()
  isPaused: boolean;

  @Column()
  phone: boolean;

  @Column()
  employees: number[];

  @Column()
  images: string[];

  @CreateDateColumn({
    type: 'time',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'time',
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

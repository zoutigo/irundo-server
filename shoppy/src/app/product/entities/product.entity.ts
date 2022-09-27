import moment from 'moment';
import 'moment-timezone';
import { IsNotEmpty } from 'class-validator';
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

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    length: 500,
    nullable: false,
  })
  description: string;

  @Column('decimal', {
    default: 0,
  })
  price: number;

  @Column('enum', {
    enum: ['u', 'kg', 'l', 'm', 'm3'],
    default: 'u',
  })
  unit: string;

  @Column('decimal', {
    default: 0,
  })
  length: string;

  @Column('decimal', {
    default: 0,
  })
  width: string;

  @Column('decimal', {
    default: 0,
  })
  heigth: string;

  @Column('decimal', {
    default: 0,
  })
  radius: string;

  @Column('boolean', {
    default: false,
  })
  isOnCount: boolean;

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
    default: null,
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

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import moment from 'moment';
import 'moment-timezone';

@Entity('families')
export class Family {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    length: 30,
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    length: 500,
    nullable: false,
    unique: true,
  })
  description: string;

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

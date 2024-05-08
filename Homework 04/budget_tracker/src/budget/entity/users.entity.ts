import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserORMEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}

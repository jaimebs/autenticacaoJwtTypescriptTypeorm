import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({nullable: false})
  email: string

  @Column({nullable: false})
  password: string
}

export default User;
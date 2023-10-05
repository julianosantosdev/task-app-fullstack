import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import User from './user.entity'

export enum TaskStatus {
  TODO = 'To-Do',
  PROGRESS = 'InProgress',
  REVISION = 'InRevision',
  FINISHED = 'Finished'
}

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.TODO })
  status: TaskStatus

  @ManyToOne(() => User)
  user: User
}

export default Task

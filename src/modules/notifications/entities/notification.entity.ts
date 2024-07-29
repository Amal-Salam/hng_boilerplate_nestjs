import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from '../../../entities/base.entity';
import { User } from '../../../modules/user/entities/user.entity';

@Entity()
export class Notification extends AbstractBaseEntity {
  @Column({ nullable: false })
  message: string;

  @Column({ nullable: false, type: 'boolean', default: false })
  is_read: boolean;

  @ManyToOne(() => User, user => user.notifications, { nullable: false, onDelete: 'CASCADE' })
  user: User;
}

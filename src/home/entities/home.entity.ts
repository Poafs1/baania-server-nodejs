import { BaseAuditableEntity } from '../../sql/entities/baseAuditable.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'home' })
export class HomeEntity extends BaseAuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  name: string;

  @Column({ nullable: true })
  desc: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column()
  post_code: string;
}

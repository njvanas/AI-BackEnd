import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Supplier } from '../suppliers/suppliers.entity';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.id, { onDelete: 'CASCADE' })
  supplier: Supplier;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('date')
  due_date: string;

  @Column({ type: 'enum', enum: ['Pending', 'Paid'], default: 'Pending' })
  status: 'Pending' | 'Paid';
}

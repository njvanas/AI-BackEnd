import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from '../clients/clients.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, (client) => client.id, { onDelete: 'CASCADE' })
  client: Client;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('date')
  due_date: string;

  @Column({ type: 'enum', enum: ['Pending', 'Paid', 'Overdue'], default: 'Pending' })
  status: 'Pending' | 'Paid' | 'Overdue';
}

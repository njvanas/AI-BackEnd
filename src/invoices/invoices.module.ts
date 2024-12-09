import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './invoices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice])],
  providers: [],
  controllers: [],
})
export class InvoicesModule {}

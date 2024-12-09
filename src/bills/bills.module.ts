import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from './bills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bill])],
  providers: [],
  controllers: [],
})
export class BillsModule {}

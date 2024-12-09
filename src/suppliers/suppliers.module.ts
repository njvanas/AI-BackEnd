import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './suppliers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  providers: [],
  controllers: [],
})
export class SuppliersModule {}

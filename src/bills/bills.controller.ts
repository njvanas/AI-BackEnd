import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BillsService } from './bills.service';
import { Bill } from './bills.entity';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Get()
  findAll() {
    return this.billsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.billsService.findOne(id);
  }

  @Post()
  create(@Body() bill: Partial<Bill>) {
    return this.billsService.create(bill);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() bill: Partial<Bill>) {
    return this.billsService.update(id, bill);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.billsService.delete(id);
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from './stock.entity';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.stockService.findOne(id);
  }

  @Post()
  create(@Body() stock: Partial<Stock>) {
    return this.stockService.create(stock);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() stock: Partial<Stock>) {
    return this.stockService.update(id, stock);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.stockService.delete(id);
  }
}

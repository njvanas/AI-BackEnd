import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './suppliers.entity';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.suppliersService.findOne(id);
  }

  @Post()
  create(@Body() supplier: Partial<Supplier>) {
    return this.suppliersService.create(supplier);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() supplier: Partial<Supplier>) {
    return this.suppliersService.update(id, supplier);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.suppliersService.delete(id);
  }
}

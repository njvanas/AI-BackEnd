import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Invoice } from './invoices.entity';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.invoicesService.findOne(id);
  }

  @Post()
  create(@Body() invoice: Partial<Invoice>) {
    return this.invoicesService.create(invoice);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() invoice: Partial<Invoice>) {
    return this.invoicesService.update(id, invoice);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.invoicesService.delete(id);
  }
}

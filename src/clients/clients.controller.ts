import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientsService.findOne(id);
  }

  @Post()
  create(@Body() client: Partial<Client>) {
    return this.clientsService.create(client);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() client: Partial<Client>) {
    return this.clientsService.update(id, client);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clientsService.delete(id);
  }
}

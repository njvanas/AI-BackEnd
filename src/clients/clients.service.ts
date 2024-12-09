import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './clients.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientsRepository: Repository<Client>,
  ) {}

  findAll() {
    return this.clientsRepository.find();
  }

  findOne(id: number) {
    return this.clientsRepository.findOneBy({ id });
  }

  create(client: Partial<Client>) {
    return this.clientsRepository.save(client);
  }

  update(id: number, client: Partial<Client>) {
    return this.clientsRepository.update(id, client);
  }

  delete(id: number) {
    return this.clientsRepository.delete(id);
  }
}

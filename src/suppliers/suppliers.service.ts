import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './suppliers.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private readonly suppliersRepository: Repository<Supplier>,
  ) {}

  findAll() {
    return this.suppliersRepository.find();
  }

  findOne(id: number) {
    return this.suppliersRepository.findOneBy({ id });
  }

  create(supplier: Partial<Supplier>) {
    return this.suppliersRepository.save(supplier);
  }

  update(id: number, supplier: Partial<Supplier>) {
    return this.suppliersRepository.update(id, supplier);
  }

  delete(id: number) {
    return this.suppliersRepository.delete(id);
  }
}

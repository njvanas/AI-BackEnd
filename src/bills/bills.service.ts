import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bill } from './bills.entity';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(Bill)
    private readonly billsRepository: Repository<Bill>,
  ) {}

  findAll() {
    return this.billsRepository.find({ relations: ['supplier'] });
  }

  findOne(id: number) {
    return this.billsRepository.findOne({
      where: { id },
      relations: ['supplier'],
    });
  }

  create(bill: Partial<Bill>) {
    return this.billsRepository.save(bill);
  }

  update(id: number, bill: Partial<Bill>) {
    return this.billsRepository.update(id, bill);
  }

  delete(id: number) {
    return this.billsRepository.delete(id);
  }
}

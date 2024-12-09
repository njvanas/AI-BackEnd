import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './invoices.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoicesRepository: Repository<Invoice>,
  ) {}

  findAll() {
    return this.invoicesRepository.find({ relations: ['client'] });
  }

  findOne(id: number) {
    return this.invoicesRepository.findOne({
      where: { id },
      relations: ['client'],
    });
  }

  create(invoice: Partial<Invoice>) {
    return this.invoicesRepository.save(invoice);
  }

  update(id: number, invoice: Partial<Invoice>) {
    return this.invoicesRepository.update(id, invoice);
  }

  delete(id: number) {
    return this.invoicesRepository.delete(id);
  }
}

import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { Stock } from './stock.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findAll() {
    const cacheKey = 'all_stock';
    const cached = await this.cacheManager.get<Stock[]>(cacheKey);

    if (cached) {
      return cached;
    }

    const stock = await this.stockRepository.find();
    await this.cacheManager.set(cacheKey, stock, { ttl: 60 });
    return stock;
  }
}


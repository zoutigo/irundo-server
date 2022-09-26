import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/app/common/services/abstract.service';
import { Repository } from 'typeorm';
import { Shop } from '../entities/shop.entity';

@Injectable()
export class ShopService extends AbstractService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
  ) {
    super(shopRepository);
  }
}

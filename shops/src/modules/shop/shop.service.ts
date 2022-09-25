import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop) private readonly shopRepository: Repository<Shop>,
  ) {}
  async create(shop: CreateShopDto) {
    return await this.shopRepository.create(shop);
  }

  async findAll() {
    return await this.shopRepository.find();
  }

  async findOne(id: number) {
    return await this.shopRepository.findOne({ id });
  }

  async update(id: number, data: UpdateShopDto) {
    return await this.shopRepository.update(id, data);
  }

  async remove(id: number) {
    return await this.shopRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './produts.repository';
import { Products } from './products.entity';
import { ProductsDto } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly poroductsRepository: ProductsRepository) {}

  async find(options: Record<string, any>) {
    const result = await this.poroductsRepository.find(options);
    return result;
  }

  async save(productsDto: ProductsDto[]): Promise<any> {
    const productsEntity = [];
    for (const productsDtoObj of productsDto) {
      productsEntity.push(productsDtoObj);
    }
    const result = await this.poroductsRepository.save(productsEntity);
    return result;
  }
}

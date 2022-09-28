import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/app/common/services/abstract.service';
import { Repository } from 'typeorm';
import { Pcategory } from '../entities/pcategory.entity';

@Injectable()
export class PcategoryService extends AbstractService {
  constructor(
    @InjectRepository(Pcategory)
    private readonly shopRepository: Repository<Pcategory>,
  ) {
    super(shopRepository);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/app/common/services/abstract.service';
import { Repository } from 'typeorm';
import { Family } from '../entities/family.entity';

@Injectable()
export class FamilyService extends AbstractService {
  constructor(
    @InjectRepository(Family)
    private readonly shopRepository: Repository<Family>,
  ) {
    super(shopRepository);
  }
}

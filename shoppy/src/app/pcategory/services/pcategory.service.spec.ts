import { Test, TestingModule } from '@nestjs/testing';
import { PcategoryService } from './pcategory.service';

describe('PcategoryService', () => {
  let service: PcategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcategoryService],
    }).compile();

    service = module.get<PcategoryService>(PcategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

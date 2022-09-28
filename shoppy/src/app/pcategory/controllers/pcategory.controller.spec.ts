import { Test, TestingModule } from '@nestjs/testing';
import { PcategoryController } from './pcategory.controller';
import { PcategoryService } from './pcategory.service';

describe('PcategoryController', () => {
  let controller: PcategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PcategoryController],
      providers: [PcategoryService],
    }).compile();

    controller = module.get<PcategoryController>(PcategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

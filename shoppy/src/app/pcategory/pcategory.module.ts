import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcategoryController } from './controllers/pcategory.controller';
import { Pcategory } from './entities/pcategory.entity';
import { PcategoryService } from './services/pcategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pcategory])],
  controllers: [PcategoryController],
  providers: [PcategoryService],
})
export class PcategoryModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyController } from './controllers/family.controller';
import { Family } from './entities/family.entity';
import { FamilyService } from './services/family.service';

@Module({
  imports: [TypeOrmModule.forFeature([Family])],
  controllers: [FamilyController],
  providers: [FamilyService],
})
export class FamilyModule {}

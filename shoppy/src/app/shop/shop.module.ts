import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopController } from './controllers/shop/shop.controller';
import { Shop } from './entities/shop.entity';
import { ShopService } from './services/shop/shop.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}

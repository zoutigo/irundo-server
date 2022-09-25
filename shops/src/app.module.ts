import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './modules/products/products.module';
import { ShopModule } from './modules/shop/shop.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ProductsModule, ShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

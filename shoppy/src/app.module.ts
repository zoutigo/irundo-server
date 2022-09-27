import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfiguration } from './config/orm/database.config';
import { ShopModule } from './app/shop/shop.module';
import { CommonModule } from './app/common/common.module';
import { ProductModule } from './app/product/product.module';
import { FamilyModule } from './app/family/family.module';
import { PcategoryModule } from './app/pcategory/pcategory.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfiguration,
    }),
    ShopModule,
    CommonModule,
    ProductModule,
    FamilyModule,
    PcategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

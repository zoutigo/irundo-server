import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateShopDto } from '../dtos/create-shop.dto';
import { UpdateShopDto } from '../dtos/update-shop.dto';
import { ShopService } from '../services/shop.service';

@Controller('shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  async findAll(@Query('page') page = 1) {
    return await this.shopService.paginate(page);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.shopService.findOne({ id });
  }

  @Post()
  async create(@Body() body: CreateShopDto) {
    return await this.shopService.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateShopDto) {
    await this.shopService.update(id, body);
    const updated = await this.shopService.findOne({ id });
    if (!updated) return new NotFoundException(`Cette boutique n'existe pas`);

    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopService.softdelete(id);
  }
}

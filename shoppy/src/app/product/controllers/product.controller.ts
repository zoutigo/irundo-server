import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(@Query('page') page = 1) {
    return await this.productService.paginate(page);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productService.findOne({ id });
  }

  @Post()
  async create(@Body() body: CreateProductDto) {
    return await this.productService.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProductDto) {
    await this.productService.update(id, body);
    const updated = await this.productService.findOne({ id });
    if (!updated) return new NotFoundException(`Cette boutique n'existe pas`);

    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.softdelete(id);
  }
}

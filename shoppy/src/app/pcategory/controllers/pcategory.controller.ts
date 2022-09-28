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
import { CreatePcategoryDto } from '../dto/create-pcategory.dto';
import { UpdatePcategoryDto } from '../dto/update-pcategory.dto';
import { PcategoryService } from '../services/pcategory.service';

@Controller('pcategories')
export class PcategoryController {
  constructor(private readonly pcategoryService: PcategoryService) {}

  @Get()
  async findAll(@Query('page') page = 1) {
    return await this.pcategoryService.paginate(page);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pcategoryService.findOne({ id });
  }

  @Post()
  async create(@Body() body: CreatePcategoryDto) {
    return await this.pcategoryService.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdatePcategoryDto) {
    await this.pcategoryService.update(id, body);
    const updated = await this.pcategoryService.findOne({ id });
    if (!updated) return new NotFoundException(`Cette categorie n'existe pas`);

    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcategoryService.softdelete(id);
  }
}

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
import { CreateFamilyDto } from '../dto/create-family.dto';
import { UpdateFamilyDto } from '../dto/update-family.dto';
import { FamilyService } from '../services/family.service';

@Controller('families')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Get()
  async findAll(@Query('page') page = 1) {
    return await this.familyService.paginate(page);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.familyService.findOne({ id });
  }

  @Post()
  async create(@Body() body: CreateFamilyDto) {
    return await this.familyService.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateFamilyDto) {
    await this.familyService.update(id, body);
    const updated = await this.familyService.findOne({ id });
    if (!updated) return new NotFoundException(`Cette famille n'existe pas`);

    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.familyService.softdelete(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MybooksService } from './mybooks.service';
import { CreateMybookDto } from './dto/create-mybook.dto';
import { UpdateMybookDto } from './dto/update-mybook.dto';

@Controller('mybooks')
export class MybooksController {
  constructor(private readonly mybooksService: MybooksService) {}

  @Post()
  create(@Body() createMybookDto: CreateMybookDto) {
    try {
      return this.mybooksService.create(createMybookDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.mybooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mybooksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMybookDto: UpdateMybookDto) {
    return this.mybooksService.update(+id, updateMybookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mybooksService.remove(+id);
  }
}

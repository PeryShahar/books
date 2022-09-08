import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Allbooks2Service } from './allbooks2.service';
import { CreateAllbooks2Dto } from './dto/create-allbooks2.dto';
import { UpdateAllbooks2Dto } from './dto/update-allbooks2.dto';

@Controller('allbooks')
export class Allbooks2Controller {
  constructor(private readonly allbooks2Service: Allbooks2Service) {}

  @Post()
  create(@Body() createAllbooks2Dto: CreateAllbooks2Dto) {
    return this.allbooks2Service.create(createAllbooks2Dto);
  }

  @Get()
  findAll() {
    return this.allbooks2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allbooks2Service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAllbooks2Dto: UpdateAllbooks2Dto,
  ) {
    return this.allbooks2Service.update(+id, updateAllbooks2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allbooks2Service.remove(+id);
  }
}

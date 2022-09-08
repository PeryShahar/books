import { PartialType } from '@nestjs/swagger';
import { CreateMybookDto } from './create-mybook.dto';

export class UpdateMybookDto extends PartialType(CreateMybookDto) {}

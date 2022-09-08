import { PartialType } from '@nestjs/swagger';
import { CreateAllbooks2Dto } from './create-allbooks2.dto';

export class UpdateAllbooks2Dto extends PartialType(CreateAllbooks2Dto) {}

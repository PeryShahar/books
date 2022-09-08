import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateMybookDto {
  @IsNumber()
  bookId: number;

  @IsString()
  title: string;

  @IsString()
  @IsUrl()
  url: string;
}

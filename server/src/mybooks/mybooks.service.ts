import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MyBooks, MyBooksDocument } from 'src/schemas/mybooks.schema';
import { CreateMybookDto } from './dto/create-mybook.dto';
import { UpdateMybookDto } from './dto/update-mybook.dto';

@Injectable()
export class MybooksService {
  constructor(
    @InjectModel(MyBooks.name)
    private MybooksModel: Model<MyBooksDocument>,
  ) {}

  async create(createMybookDto: CreateMybookDto): Promise<MyBooks> {
    console.log(createMybookDto);

    const exists = await this.MybooksModel.findOne({
      bookId: createMybookDto.bookId,
    });
    if (exists) throw HttpStatus.NOT_ACCEPTABLE;
    return await new this.MybooksModel(createMybookDto).save();
  }

  async findAll() {
    return this.MybooksModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} mybook`;
  }

  update(id: number, updateMybookDto: UpdateMybookDto) {
    return `This action updates a #${id} mybook`;
  }

  async remove(id: number) {
    return this.MybooksModel.deleteOne({ id });
  }
}

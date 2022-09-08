import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Allbooks2, AllBooks2Document } from 'src/schemas/allbooks2.schema';
import { CreateAllbooks2Dto } from './dto/create-allbooks2.dto';
import { UpdateAllbooks2Dto } from './dto/update-allbooks2.dto';

@Injectable()
export class Allbooks2Service {
  constructor(
    @InjectModel(Allbooks2.name)
    private AllbooksModel: Model<AllBooks2Document>,
  ) {}
  async create(createAllbooks2Dto: CreateAllbooks2Dto): Promise<Allbooks2> {
    return new this.AllbooksModel(createAllbooks2Dto).save();
  }

  async findAll() {
    return this.AllbooksModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} allbooks2`;
  }

  update(id: number, updateAllbooks2Dto: UpdateAllbooks2Dto) {
    return `This action updates a #${id} allbooks2`;
  }

  remove(id: number) {
    return `This action removes a #${id} allbooks2`;
  }
}

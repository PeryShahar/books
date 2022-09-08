import { Module } from '@nestjs/common';
import { Allbooks2Service } from './allbooks2.service';
import { Allbooks2Controller } from './allbooks2.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Allbooks2, AllBooks2Schema } from 'src/schemas/allbooks2.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Allbooks2.name, schema: AllBooks2Schema },
    ]),
  ],
  controllers: [Allbooks2Controller],
  providers: [Allbooks2Service],
})
export class Allbooks2Module {}

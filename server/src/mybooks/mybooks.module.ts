import { Module } from '@nestjs/common';
import { MybooksService } from './mybooks.service';
import { MybooksController } from './mybooks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MyBooks, MyBooksSchema } from 'src/schemas/mybooks.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MyBooks.name, schema: MyBooksSchema }]),
  ],
  controllers: [MybooksController],
  providers: [MybooksService],
})
export class MybooksModule {}

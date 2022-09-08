import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MyBooksDocument = MyBooks & Document;

@Schema()
export class MyBooks {
  @Prop()
  bookId: number;

  @Prop()
  title: string;

  @Prop()
  url: string;
}

export const MyBooksSchema = SchemaFactory.createForClass(MyBooks);

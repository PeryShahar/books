import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AllBooks2Document = Allbooks2 & Document;

@Schema()
export class Allbooks2 {
  @Prop()
  bookId: number;

  @Prop()
  title: string;

  @Prop()
  url: string;
}

export const AllBooks2Schema = SchemaFactory.createForClass(Allbooks2);

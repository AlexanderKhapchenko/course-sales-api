import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

@Schema({ _id: false })
class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

@Schema({ _id: false })
class TopPageAdvantages {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema({
  timestamps: true,
  _id: true,
})
export class TopPage {
  @Prop({ enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop(HhData)
  hh?: HhData;

  @Prop({ type: mongoose.Schema.Types.Array })
  advantages: TopPageAdvantages[];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle?: string;

  @Prop({ type: [String] })
  tags: string[];
}

export type TopPageDocument = HydratedDocument<TopPage>;
export const TopPageSchema = SchemaFactory.createForClass(TopPage);

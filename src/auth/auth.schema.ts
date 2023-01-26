import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  _id: true,
})
export class Auth {
  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;
}

export type AuthDocument = Auth | Document;
export const AuthSchema = SchemaFactory.createForClass(Auth);

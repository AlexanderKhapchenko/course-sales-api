import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { User, UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        collection: 'Auth',
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}

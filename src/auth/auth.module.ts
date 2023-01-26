import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Auth, AuthSchema } from './auth.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Auth.name,
        schema: AuthSchema,
        collection: 'Auth',
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule } from '@nestjs/config';
import { getMongoConfig } from './configs/mongo.config';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(getMongoConfig()),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
    FilesModule,
  ],
})
export class AppModule {}

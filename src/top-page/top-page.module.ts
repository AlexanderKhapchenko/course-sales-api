import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPage, TopPageSchema } from './top-page.schema';
import { TopPageService } from './top-page.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TopPage.name,
        schema: TopPageSchema,
        collection: 'TopPage',
      },
    ]),
  ],
  controllers: [TopPageController],
  providers: [TopPageService],
})
export class TopPageModule {}

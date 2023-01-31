import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from './review.schema';
import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(dto: CreateReviewDto): Promise<ReviewDocument> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<ReviewDocument> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(productId: string): Promise<ReviewDocument[]> {
    return this.reviewModel
      .find({
        productId: productId,
      })
      .exec();
  }

  async deleteAllByProductId(productId: string) {
    return this.reviewModel
      .deleteMany({
        productId,
      })
      .exec();
  }
}

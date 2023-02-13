import { Product } from '../product.schema';
import { Review } from '../../review/review.schema';

export type FindWithReviewsResult = (Product & {
  reviewCount: number;
  reviewAvg: number;
  review: Review;
})[];

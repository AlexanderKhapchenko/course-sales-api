import { TopLevelCategory } from '../top-page.schema';
import { IsEnum } from 'class-validator';

export class FindTopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;
}

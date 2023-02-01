import { IsString } from 'class-validator';
import { VALIDATION_MESSAGE } from '../auth.constants';

export class AuthDto {
  @IsString({ message: VALIDATION_MESSAGE.LOGIN_TYPE })
  login: string;

  @IsString({ message: VALIDATION_MESSAGE.PASSWORD_TYPE })
  password: string;
}

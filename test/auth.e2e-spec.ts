import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { AuthDto } from '../src/auth/dto/auth.dto';
import { disconnect } from 'mongoose';
import { LOGIN_ERROR, VALIDATION_MESSAGE } from '../src/auth/auth.constants';

// TODO: add methods for registration and deletion this user. For now, you need to add this user before testing the app
const loginDto: AuthDto = {
  login: 'test-user@gmail.com',
  password: 'test-password',
};

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST) - success', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(loginDto)
      .expect(200)
      .then(({ body }: request.Response) =>
        expect(body.accessToken).toBeDefined(),
      );
  });

  it('/auth/login (POST) - wrong password', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...loginDto, password: 'wrong password' })
      .expect(401, {
        statusCode: 401,
        message: LOGIN_ERROR,
        error: 'Unauthorized',
      });
  });

  it('/auth/login (POST) - fail validation', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ login: 707, password: 707 })
      .expect(400, {
        statusCode: 400,
        message: [
          VALIDATION_MESSAGE.LOGIN_TYPE,
          VALIDATION_MESSAGE.PASSWORD_TYPE,
        ],
        error: 'Bad Request',
      });
  });

  afterAll(() => {
    disconnect();
  });
});

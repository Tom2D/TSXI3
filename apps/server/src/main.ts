import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_AUTHORITY, SERVER_PORT } from '@tsxinsider/shared';
import { AllExceptionsFilter } from './exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: CLIENT_AUTHORITY, // or '*' to allow all origins
  });

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(SERVER_PORT);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_AUTHORITY, SERVER_PORT } from '@tsxinsider/shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: CLIENT_AUTHORITY, // or '*' to allow all origins
  });

  //app.useGlobalPipes(new ValidationPipe()); // TDD_TODO_2 Pertinent?
  await app.listen(SERVER_PORT);
}

bootstrap();

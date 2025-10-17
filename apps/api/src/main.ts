import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module.js';
import { httpLogger } from './observability/logger.js';
import { PrismaService } from './prisma/prisma.service.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });
  app.useLogger(new Logger());
  app.use(httpLogger);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true
    })
  );

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT') ?? 3000;
  await app.listen(port);
}

bootstrap();

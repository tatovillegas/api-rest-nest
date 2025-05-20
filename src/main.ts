import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('NestJs la nueva era')
    .setDescription('Consumo de Api Rest de videos')
    .setVersion('1.0')
    .addTag('Videos')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
 
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

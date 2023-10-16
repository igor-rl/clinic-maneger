import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerTheme } from 'swagger-themes';
import { ValidationPipe } from '@nestjs/common';
import { SuccessInterceptor } from './common/interceptors/sucess.interceptor';
import { HttpExceptionFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  const bodyParser = require("body-parser");
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api/v1');
  app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: false
  }));
  app.use(bodyParser.json({ limit: "30mb" }));
  const config = new DocumentBuilder()
    .setTitle('CLINIC MANAGER API')
    .setVersion('1.0')
    .addTag('Hello', 'Hello')
    .addTag('Auth', 'Autorização e autenticação')
    .addTag('Plano', 'Manipulação dos planos')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    ).build();

  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme('v3');
  const options = {
    explorer: true,
    customCss: theme.getBuffer('dark')
  };
  SwaggerModule.setup('api/v1/docs', app, document, options);
  app.useGlobalInterceptors(new SuccessInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.API_PORT || 3000)
  const local = await app.getUrl()
  console.log(`API em execução: ${await app.getUrl()}`);
  console.log(`Documentação do projeto: ${local}/api/v1/docs`);
  console.log(`Download da documentação: ${local}/docs-json`);
}
bootstrap()

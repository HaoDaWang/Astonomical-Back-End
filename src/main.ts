import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AnyExceptionFilter } from './filters/anyExceptionFilter';

async function bootstrap(){
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new AnyExceptionFilter());
    app.listen(3000);
}

bootstrap();
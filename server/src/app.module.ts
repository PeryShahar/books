import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Allbooks2Module } from './allbooks2/allbooks2.module';
import { MybooksModule } from './mybooks/mybooks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    Allbooks2Module,
    MybooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

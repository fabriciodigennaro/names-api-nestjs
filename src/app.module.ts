import { Module } from '@nestjs/common';
import { NamesController } from './controller/names.controller';
import { NamesService } from './service/names.service';

@Module({
  imports: [],
  controllers: [NamesController],
  providers: [NamesService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TickersModule } from './tickers/tickers.module';

@Module({
  imports: [TickersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TickersController } from './tickers.controller';
import { TickersService } from './tickers.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TickersController],
  providers: [TickersService],
})
export class TickersModule {}

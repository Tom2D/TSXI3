import { Controller, Get, Param } from '@nestjs/common';
import { TickersService } from './tickers.service';
import { tickers } from '@prisma/client';

@Controller('tickers')
export class TickersController {
  constructor(private readonly tickersService: TickersService) {}

  @Get()
  async findAll(): Promise<tickers[]> {
    return this.tickersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<tickers | null> {
    return this.tickersService.findOne(+id);
  }
}

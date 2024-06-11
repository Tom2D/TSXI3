import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ExchangesService } from './exchanges.service';
import { exchanges } from '@prisma/client';

@Controller('exchanges')
export class ExchangesController {
  constructor(private readonly exchangesService: ExchangesService) {}

  @Get()
  async findAll(): Promise<exchanges[]> {
    return this.exchangesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<exchanges | null> {
    return this.exchangesService.findOne(+id);
  }
}

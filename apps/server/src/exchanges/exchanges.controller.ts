import { Controller, Get, Param } from '@nestjs/common';
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
  findOne(@Param('id') id: number): Promise<exchanges | null> {
    return this.exchangesService.findOne(+id);
  }
}

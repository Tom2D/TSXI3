import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { currency } from '@prisma/client';

@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Get()
  async findAll(): Promise<currency[]> {
    return this.currenciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<currency | null> {
    return this.currenciesService.findOne(+id);
  }
}

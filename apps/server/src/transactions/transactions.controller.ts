import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { transactions } from '@prisma/client';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async findAll(): Promise<transactions[]> {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<transactions | null> {
    return this.transactionsService.findOne(+id);
  }
}

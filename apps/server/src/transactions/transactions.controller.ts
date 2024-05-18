import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { transactions } from '@prisma/client';
import { ParseDatePipe } from '../ParsePipes/ParseDatePipe';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async findAll(
    @Query('beginFilingDate', ParseDatePipe) beginFilingDate: Date,
    @Query('endFilingDate', ParseDatePipe) endFilingDate: Date,
  ): Promise<transactions[]> {
    return this.transactionsService.findAll(beginFilingDate, endFilingDate);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<transactions | null> {
    return this.transactionsService.findOne(+id);
  }
}

import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { transactions } from '@prisma/client';
import { ParseDatePipe } from '../ParsePipes/ParseDatePipe';
import { MAX_TRANSACTIONS_PER_REQUEST } from '../server-constants';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async findAll(
    @Query('beginFilingDate', ParseDatePipe) beginFilingDate: Date,
    @Query('endFilingDate', ParseDatePipe) endFilingDate: Date,
    @Query('limit', new DefaultValuePipe(MAX_TRANSACTIONS_PER_REQUEST), ParseIntPipe) limit: number,
  ): Promise<transactions[]> {
    return this.transactionsService.findAll(beginFilingDate, endFilingDate, limit);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<transactions | null> {
    return this.transactionsService.findOne(+id);
  }
}

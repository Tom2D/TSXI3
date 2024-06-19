import { Controller, Get, Query, DefaultValuePipe, ParseIntPipe, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ParseDatePipe } from '../ParsePipes/ParseDatePipe';
import { transactions } from '@prisma/client';
import { MAX_TRANSACTIONS_PER_REQUEST } from '../server-constants';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async findAll(
    @Query('beginFilingDate', ParseDatePipe) beginFilingDate: Date,
    @Query('endFilingDate', ParseDatePipe) endFilingDate: Date,
    @Query('limit', new DefaultValuePipe(MAX_TRANSACTIONS_PER_REQUEST), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('trnNatureCodes') trnNatureCodes: string,
    @Query('issuerName') issuerName?: string,
    @Query('insiderName') insiderName?: string,
    @Query('insiderTitles') insiderTitles?: string,
  ): Promise<any> {
    const codes = trnNatureCodes ? trnNatureCodes.split(',').map(Number) : [];
    const titles = insiderTitles ? insiderTitles.split(',') : [];
    return this.transactionsService.findAll(
      beginFilingDate,
      endFilingDate,
      limit,
      page,
      codes,
      issuerName,
      insiderName,
      titles,
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<transactions | null> {
    return this.transactionsService.findOne(id);
  }
}

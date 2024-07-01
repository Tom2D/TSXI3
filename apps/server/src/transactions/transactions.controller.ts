import { Controller, Get, Query, DefaultValuePipe, ParseIntPipe, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { transactions } from '@prisma/client';
import { MAX_TRANSACTIONS_PER_REQUEST } from '../server-constants';
import { ParseTrnNatureCodesPipe } from '../ParsePipes/parse-trn-nature-codes.pipe';
import { ParseDatePipe } from '../ParsePipes/parse-date-pipe';
import { TitlesBitfield } from '@tsxinsider/shared';
import { ParseInsiderTitlesPipe } from '../ParsePipes/parse-insider-titles.pipe';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async findAll(
    @Query('beginFilingDate', ParseDatePipe) beginFilingDate: Date,
    @Query('endFilingDate', ParseDatePipe) endFilingDate: Date,
    @Query('limit', new DefaultValuePipe(MAX_TRANSACTIONS_PER_REQUEST), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('trnNatureCodes', ParseTrnNatureCodesPipe) trnNatureCodes: number[],
    @Query('issuerName', new DefaultValuePipe('')) issuerName: string,
    @Query('insiderName', new DefaultValuePipe('')) insiderName: string,
    @Query('insiderTitles', new DefaultValuePipe(0), ParseInsiderTitlesPipe) insiderTitles: TitlesBitfield,
    @Query('ticker', new DefaultValuePipe('')) ticker: string,
    @Query('useTradeDate', new DefaultValuePipe(0), ParseIntPipe) useTradeDate: number,
  ): Promise<any> {
    return this.transactionsService.findAll(
      beginFilingDate,
      endFilingDate,
      limit,
      page,
      trnNatureCodes,
      issuerName,
      insiderName,
      insiderTitles,
      ticker,
      useTradeDate === 1,
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<transactions | null> {
    return this.transactionsService.findOne(id);
  }
}

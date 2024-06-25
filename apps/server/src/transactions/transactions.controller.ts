import { Controller, Get, Query, DefaultValuePipe, ParseIntPipe, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { relationstoissuer_type, transactions } from '@prisma/client';
import { MAX_TRANSACTIONS_PER_REQUEST } from '../server-constants';
import { ParseTrnNatureCodesPipe } from '../ParsePipes/parse-trn-nature-codes.pipe';
import { ParseInsiderTitlesPipe } from '../ParsePipes/parse-insider-titles.pipe';
import { ParseDatePipe } from '../ParsePipes/parse-date-pipe';

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
    @Query('insiderTitles', ParseInsiderTitlesPipe) insiderTitles: relationstoissuer_type[],
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
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<transactions | null> {
    return this.transactionsService.findOne(id);
  }
}

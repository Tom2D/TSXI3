import { Controller, Get, Query, DefaultValuePipe, ParseIntPipe, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ParseDatePipe } from '../ParsePipes/ParseDatePipe';
import { relationstoissuer_type, transactions } from '@prisma/client';
import { MAX_TRANSACTIONS_PER_REQUEST } from '../server-constants';
import { relationsToIssuerFromInt } from '@tsxinsider/shared';

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
    @Query('issuerName', new DefaultValuePipe('')) issuerName: string,
    @Query('insiderName', new DefaultValuePipe('')) insiderName: string,
    @Query('insiderTitles') insiderTitles: string,
  ): Promise<any> {
    const codes = trnNatureCodes ? trnNatureCodes.split(',').map(Number) : [];
    const titles = insiderTitles
      ? insiderTitles
          .split(',')
          .map((title) => relationsToIssuerFromInt<relationstoissuer_type>(Number(title)))
          .filter((title): title is relationstoissuer_type => title !== undefined)
      : [];

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

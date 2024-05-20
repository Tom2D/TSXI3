import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { transactions } from '@prisma/client';
import { MAX_TRANSACTIONS_PER_REQUEST } from '../server-constants';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    beginFilingDate: Date,
    endFilingDate: Date,
    limit: number,
    page: number,
    trnNatureCodes: number[],
  ): Promise<transactions[]> {
    const offset = (page - 1) * limit;
    const whereClause: any = {
      filingDate: {
        gte: beginFilingDate, // >= beginFilingDate
        lte: endFilingDate, // <= endFilingDate
      },
    };

    if (trnNatureCodes.length > 0) {
      whereClause.trnNatureCode = { in: trnNatureCodes };
    }

    return this.prisma.transactions.findMany({
      where: whereClause,
      take: Math.min(limit, MAX_TRANSACTIONS_PER_REQUEST), // Max number of transactions per request
      skip: offset, // Skip the number of records based on the page number
    });
  }

  async findOne(id: number): Promise<transactions | null> {
    return this.prisma.transactions.findUnique({ where: { id } });
  }
}

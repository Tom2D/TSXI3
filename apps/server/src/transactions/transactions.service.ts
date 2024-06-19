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
    issuerName?: string,
    insiderName?: string,
    insiderTitles?: string[],
  ): Promise<any> {
    const offset: number = page * limit;

    const whereClause = {
      filingDate: {
        gte: beginFilingDate,
        lte: endFilingDate,
      },
      trnNatureCode: {
        in: trnNatureCodes.length > 0 ? trnNatureCodes : undefined,
      },
      issuers: issuerName
        ? {
            name: {
              contains: issuerName,
            },
          }
        : {},
      insiders: insiderName
        ? {
            name: {
              contains: insiderName,
            },
          }
        : {},
    };

    const transactions = await this.prisma.transactions.findMany({
      where: whereClause,
      take: Math.min(limit, MAX_TRANSACTIONS_PER_REQUEST),
      skip: offset,
    });

    const total = await this.prisma.transactions.count({
      where: whereClause,
    });

    return {
      transactions,
      total,
    };
  }

  async findOne(id: number): Promise<transactions | null> {
    return this.prisma.transactions.findUnique({
      where: { id },
    });
  }
}

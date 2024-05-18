import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { transactions } from '@prisma/client';
import { MAX_TRANSACTIONS_PER_REQUEST } from '../server-constants';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(beginFilingDate: Date, endFilingDate: Date): Promise<transactions[]> {
    return this.prisma.transactions.findMany({
      where: {
        filingDate: {
          gte: beginFilingDate, // greater than or equal to
          lte: endFilingDate, // less than or equal to
        },
      },
      take: MAX_TRANSACTIONS_PER_REQUEST, // Limit
    });
  }

  async findOne(id: number): Promise<transactions | null> {
    return this.prisma.transactions.findUnique({ where: { id } });
  }
}

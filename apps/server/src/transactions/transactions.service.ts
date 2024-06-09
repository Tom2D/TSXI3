import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { transactions, issuers, insiders, relationstoissuer, tickers } from '@prisma/client';
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
  ): Promise<any> {
    const offset: number = (page - 1) * limit;

    const transactions = await this.prisma.transactions.findMany({
      where: {
        filingDate: {
          gte: beginFilingDate,
          lte: endFilingDate,
        },
        trnNatureCode: {
          in: trnNatureCodes.length > 0 ? trnNatureCodes : undefined,
        },
      },
      include: {
        issuers: {
          include: {
            tickers: true,
          },
        },
        insiders: {
          include: {
            relationstoissuer: true,
          },
        },
      },
      take: Math.min(limit, MAX_TRANSACTIONS_PER_REQUEST),
      skip: offset,
    });

    const uniqueIssuers = new Map<number, issuers>();
    const uniqueTickers = new Map<number, tickers>();
    const uniqueInsiders = new Map<number, insiders>();
    const uniqueRelationsToIssuer = new Map<string, relationstoissuer>();

    transactions.forEach((trn) => {
      if (trn.issuers) {
        uniqueIssuers.set(trn.issuers.id, trn.issuers);
        if (trn.issuers.tickers) {
          uniqueTickers.set(trn.issuers.tickers.id, trn.issuers.tickers);
        }
      }
      if (trn.insiders) {
        uniqueInsiders.set(trn.insiders.id, trn.insiders);
        trn.insiders.relationstoissuer.forEach((relation) => {
          uniqueRelationsToIssuer.set(`${relation.type}-${relation.insiderId}`, relation);
        });
      }
    });

    return {
      transactions,
      issuers: Array.from(uniqueIssuers.values()),
      tickers: Array.from(uniqueTickers.values()),
      insiders: Array.from(uniqueInsiders.values()),
      relationsToIssuer: Array.from(uniqueRelationsToIssuer.values()),
    };
  }

  async findOne(id: number): Promise<transactions | null> {
    return this.prisma.transactions.findUnique({
      where: { id },
    });
  }
}

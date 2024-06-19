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
    issuerName: string,
    insiderName: string,
    insiderTitles: number[],
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
      insiders: {
        name: insiderName
          ? {
              contains: insiderName,
            }
          : {},
        // TO COMPLETE ****
      },
    };

    const transactions = await this.prisma.transactions.findMany({
      where: whereClause,
      take: Math.min(limit, MAX_TRANSACTIONS_PER_REQUEST),
      skip: offset,
    });

    const total = await this.prisma.transactions.count({
      where: whereClause,
    });

    const issuerIds = transactions.map((trn) => trn.issuerId).filter((id) => id !== null) as number[];
    const insiderIds = transactions.map((trn) => trn.insiderId).filter((id) => id !== null) as number[];

    const issuers = await this.prisma.issuers.findMany({ where: { id: { in: issuerIds } } });
    const insiders = await this.prisma.insiders.findMany({ where: { id: { in: insiderIds } } });

    const tickers = await this.prisma.tickers.findMany({
      where: { id: { in: issuers.map((issuer) => issuer.tickerId).filter((id) => id !== null) as number[] } },
    });

    const relationsToIssuer = await this.prisma.relationstoissuer.findMany({ where: { insiderId: { in: insiderIds } } });

    const securityDesignations = await this.prisma.securitydesignations.findMany({
      where: { id: { in: transactions.map((trn) => trn.securityId).filter((id) => id !== null) as number[] } },
    });

    return {
      transactions,
      total,
      issuers: Array.from(new Map(issuers.map((issuer) => [issuer.id, issuer])).values()),
      tickers: Array.from(new Map(tickers.map((ticker) => [ticker.id, ticker])).values()),
      insiders: Array.from(new Map(insiders.map((insider) => [insider.id, insider])).values()),
      relationsToIssuer: Array.from(
        new Map(relationsToIssuer.map((relation) => [`${relation.type}-${relation.insiderId}`, relation])).values(),
      ),
      securityDesignations: Array.from(
        new Map(securityDesignations.map((designation) => [designation.id, designation])).values(),
      ),
    };
  }

  async findOne(id: number): Promise<transactions | null> {
    return this.prisma.transactions.findUnique({
      where: { id },
    });
  }
}

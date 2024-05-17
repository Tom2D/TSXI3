import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { transactions } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<transactions[]> {
    return this.prisma.transactions.findMany();
  }

  async findOne(id: number): Promise<transactions | null> {
    return this.prisma.transactions.findUnique({ where: { id } });
  }
}

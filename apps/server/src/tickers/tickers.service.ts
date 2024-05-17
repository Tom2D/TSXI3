import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { tickers } from '@prisma/client';

@Injectable()
export class TickersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<tickers[]> {
    return this.prisma.tickers.findMany();
  }

  async findOne(id: number): Promise<tickers | null> {
    return this.prisma.tickers.findUnique({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { currency } from '@prisma/client';

@Injectable()
export class CurrenciesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<currency[]> {
    return this.prisma.currency.findMany();
  }

  async findOne(id: number): Promise<currency | null> {
    return this.prisma.currency.findUnique({ where: { id } });
  }
}

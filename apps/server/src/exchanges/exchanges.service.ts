import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { exchanges } from '@prisma/client';

@Injectable()
export class ExchangesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<exchanges[]> {
    return this.prisma.exchanges.findMany();
  }

  async findOne(id: number): Promise<exchanges | null> {
    return this.prisma.exchanges.findUnique({ where: { id } });
  }
}

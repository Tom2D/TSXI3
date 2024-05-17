import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { trnnatures } from '@prisma/client';

@Injectable()
export class TrnNaturesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<trnnatures[]> {
    return this.prisma.trnnatures.findMany();
  }

  async findOne(code: number): Promise<trnnatures | null> {
    return this.prisma.trnnatures.findUnique({ where: { code } });
  }
}

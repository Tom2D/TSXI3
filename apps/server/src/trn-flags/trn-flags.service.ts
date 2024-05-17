import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { trnflag } from '@prisma/client';

@Injectable()
export class TrnFlagsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<trnflag[]> {
    return this.prisma.trnflag.findMany();
  }

  async findOne(id: number): Promise<trnflag | null> {
    return this.prisma.trnflag.findUnique({ where: { id } });
  }
}

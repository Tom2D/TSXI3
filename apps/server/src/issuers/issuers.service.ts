import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { issuers } from '@prisma/client';

@Injectable()
export class IssuersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<issuers[]> {
    return this.prisma.issuers.findMany();
  }

  async findOne(id: number): Promise<issuers | null> {
    return this.prisma.issuers.findUnique({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { sizes } from '@prisma/client';

@Injectable()
export class IssuerSizesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<sizes[]> {
    return this.prisma.sizes.findMany();
  }

  async findOne(id: number): Promise<sizes | null> {
    return this.prisma.sizes.findUnique({ where: { id } });
  }
}

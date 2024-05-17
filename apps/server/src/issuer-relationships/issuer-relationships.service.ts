import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { relationstoissuer } from '@prisma/client';

@Injectable()
export class IssuerRelationshipsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<relationstoissuer[]> {
    return this.prisma.relationstoissuer.findMany();
  }

  async findAllForInsider(insiderId: number): Promise<relationstoissuer[]> {
    return this.prisma.relationstoissuer.findMany({
      where: { insiderId },
    });
  }
}

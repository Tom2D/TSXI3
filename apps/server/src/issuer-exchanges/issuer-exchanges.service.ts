import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { issuerexchanges } from '@prisma/client';

@Injectable()
export class IssuerExchangesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<issuerexchanges[]> {
    return this.prisma.issuerexchanges.findMany();
  }

  async findAllForIssuer(issuerId: number): Promise<issuerexchanges[]> {
    return this.prisma.issuerexchanges.findMany({
      where: { issuerId },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { insiders } from '@prisma/client';

@Injectable()
export class InsidersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<insiders[]> {
    return this.prisma.insiders.findMany();
  }

  async findOne(id: number): Promise<insiders | null> {
    return this.prisma.insiders.findUnique({ where: { id } });
  }
}

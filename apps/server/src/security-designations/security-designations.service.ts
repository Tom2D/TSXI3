import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { securitydesignations } from '@prisma/client';

@Injectable()
export class SecurityDesignationsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<securitydesignations[]> {
    return this.prisma.securitydesignations.findMany();
  }

  async findOne(id: number): Promise<securitydesignations | null> {
    return this.prisma.securitydesignations.findUnique({ where: { id } });
  }
}

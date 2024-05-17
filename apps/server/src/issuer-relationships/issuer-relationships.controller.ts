import { Controller, Get, Param } from '@nestjs/common';
import { IssuerRelationshipsService } from './issuer-relationships.service';
import { relationstoissuer } from '@prisma/client';

@Controller('issuer-relationships')
export class IssuerRelationshipsController {
  constructor(
    private readonly issuerRelationshipsService: IssuerRelationshipsService,
  ) {}

  @Get()
  async findAll(): Promise<relationstoissuer[]> {
    return this.issuerRelationshipsService.findAll();
  }

  @Get(':insiderId')
  findOne(@Param('insiderId') insiderId: number): Promise<relationstoissuer[]> {
    return this.issuerRelationshipsService.findAllForInsider(+insiderId);
  }
}

import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { IssuerExchangesService } from './issuer-exchanges.service';
import { issuerexchanges } from '@prisma/client';

@Controller('issuer-exchanges')
export class IssuerExchangesController {
  constructor(
    private readonly issuerExchangesService: IssuerExchangesService,
  ) {}

  @Get()
  async findAll(): Promise<issuerexchanges[]> {
    return this.issuerExchangesService.findAll();
  }

  @Get(':issuerId')
  findOne(@Param('issuerId', ParseIntPipe) issuerId: number): Promise<issuerexchanges[]> {
    return this.issuerExchangesService.findAllForIssuer(+issuerId);
  }
}

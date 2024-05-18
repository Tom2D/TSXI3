import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { IssuerSizesService } from './issuer-sizes.service';
import { sizes } from '@prisma/client';

@Controller('issuerSizes')
export class IssuerSizesController {
  constructor(private readonly issuerSizesService: IssuerSizesService) {}

  @Get()
  async findAll(): Promise<sizes[]> {
    return this.issuerSizesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<sizes | null> {
    return this.issuerSizesService.findOne(+id);
  }
}

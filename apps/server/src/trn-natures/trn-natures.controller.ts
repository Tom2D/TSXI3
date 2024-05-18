import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { trnnatures } from '@prisma/client';
import { TrnNaturesService } from './trn-natures.service';

@Controller('trn-natures')
export class TrnNaturesController {
  constructor(private readonly trnNaturesService: TrnNaturesService) {}

  @Get()
  async findAll(): Promise<trnnatures[]> {
    return this.trnNaturesService.findAll();
  }

  @Get(':code')
  findOne(@Param('code', ParseIntPipe) code: number): Promise<trnnatures | null> {
    return this.trnNaturesService.findOne(+code);
  }
}

import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { trnflag } from '@prisma/client';
import { TrnFlagsService } from './trn-flags.service';

@Controller('trn-flags')
export class TrnFlagsController {
  constructor(private readonly trnFlags: TrnFlagsService) {}

  @Get()
  async findAll(): Promise<trnflag[]> {
    return this.trnFlags.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<trnflag | null> {
    return this.trnFlags.findOne(+id);
  }
}

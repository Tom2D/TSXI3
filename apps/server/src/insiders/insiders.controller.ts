import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { InsidersService } from './insiders.service';
import { insiders } from '@prisma/client';

@Controller('insiders')
export class InsidersController {
  constructor(private readonly insidersService: InsidersService) {}

  @Get()
  async findAll(): Promise<insiders[]> {
    return this.insidersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<insiders | null> {
    return this.insidersService.findOne(+id);
  }
}

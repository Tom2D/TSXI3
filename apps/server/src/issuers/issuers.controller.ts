import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { IssuersService } from './issuers.service';
import { issuers } from '@prisma/client';

@Controller('issuers')
export class IssuersController {
  constructor(private readonly issuersService: IssuersService) {}

  @Get()
  findAll(): Promise<issuers[]> {
    return this.issuersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): Promise<issuers | null> {
    return this.issuersService.findOne(+id);
  }
}

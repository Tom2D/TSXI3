import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { securitydesignations } from '@prisma/client';
import { SecurityDesignationsService } from './security-designations.service';

@Controller('security-designations')
export class SecurityDesignationsController {
  constructor(private readonly securityDesignationsService: SecurityDesignationsService) {}

  @Get()
  async findAll(): Promise<securitydesignations[]> {
    return this.securityDesignationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<securitydesignations | null> {
    return this.securityDesignationsService.findOne(+id);
  }
}

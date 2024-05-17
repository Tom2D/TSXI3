import { Module } from '@nestjs/common';
import { InsidersService } from './insiders.service';
import { InsidersController } from './insiders.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InsidersController],
  providers: [InsidersService],
})
export class InsidersModule {}

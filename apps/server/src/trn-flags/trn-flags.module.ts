import { Module } from '@nestjs/common';
import { TrnFlagsService } from './trn-flags.service';
import { TrnFlagsController } from './trn-flags.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TrnFlagsController],
  providers: [TrnFlagsService],
})
export class TrnFlagsModule {}

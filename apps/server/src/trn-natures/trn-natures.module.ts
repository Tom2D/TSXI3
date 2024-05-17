import { Module } from '@nestjs/common';
import { TrnNaturesService } from './trn-natures.service';
import { TrnNaturesController } from './trn-natures.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TrnNaturesController],
  providers: [TrnNaturesService],
})
export class TrnNaturesModule {}

import { Module } from '@nestjs/common';
import { IssuerExchangesService } from './issuer-exchanges.service';
import { IssuerExchangesController } from './issuer-exchanges.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IssuerExchangesController],
  providers: [IssuerExchangesService],
})
export class IssuerExchangesModule {}

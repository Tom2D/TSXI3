import { Module } from '@nestjs/common';
import { IssuerSizesService } from './issuer-sizes.service';
import { IssuerSizesController } from './issuer-sizes.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IssuerSizesController],
  providers: [IssuerSizesService],
})
export class IssuerSizesModule {}

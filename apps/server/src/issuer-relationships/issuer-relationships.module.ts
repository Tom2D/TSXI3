import { Module } from '@nestjs/common';
import { IssuerRelationshipsService } from './issuer-relationships.service';
import { IssuerRelationshipsController } from './issuer-relationships.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IssuerRelationshipsController],
  providers: [IssuerRelationshipsService],
})
export class IssuerRelationshipsModule {}

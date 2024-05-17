import { Module } from '@nestjs/common';
import { SecurityDesignationsService } from './security-designations.service';
import { SecurityDesignationsController } from './security-designations.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SecurityDesignationsController],
  providers: [SecurityDesignationsService],
})
export class SecurityDesignationsModule {}

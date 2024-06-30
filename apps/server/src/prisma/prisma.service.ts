import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const PRISMA_LOGGING = true;

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
      ],
    });
  }

  async onModuleInit() {
    this.$on('query' as never, (e: any) => {
      if (PRISMA_LOGGING) {
        console.log(`${e.query} ${e.params}`);
      }
    });

    await this.$connect();
  }
}

import { Injectable } from '@nestjs/common';
import { API_PLAYGROUND_COUNT, CLIENT_PORT } from '@tsxinsider/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ' + API_PLAYGROUND_COUNT + CLIENT_PORT;
  }
}

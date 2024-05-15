import { Injectable } from '@nestjs/common';

@Injectable()
export class TickersService {
    async findall(): Promise<string[]> {
        return ['GME', 'HUYA'];
    }
}

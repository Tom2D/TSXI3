import {Controller, Get} from '@nestjs/common';
import {TickersService} from "./tickers.service";

@Controller('tickers')
export class TickersController {
    constructor(private readonly tickersService: TickersService) {}

    @Get()
    async findAll(): Promise<string[]> {
        return await this.tickersService.findall();
    }
}

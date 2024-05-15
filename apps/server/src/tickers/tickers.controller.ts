import {Controller, Get} from '@nestjs/common';
import {TickersService} from "./tickers.service";
import {tickers} from "@prisma/client";

@Controller('tickers')
export class TickersController {
    constructor(private readonly tickersService: TickersService) {
    }

    @Get()
    async findAll(): Promise<tickers[]> {
        return this.tickersService.findAll();
    }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TickersModule } from './tickers/tickers.module';
import { IssuersModule } from './issuers/issuers.module';
import { ExchangesModule } from './exchanges/exchanges.module';
import { InsidersModule } from './insiders/insiders.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TrnNaturesModule } from './trn-natures/trn-natures.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { SecurityDesignationsModule } from './security-designations/security-designations.module';
import { TrnFlagsModule } from './trn-flags/trn-flags.module';
import { IssuerSizesModule } from './issuer-sizes/issuer-sizes.module';
import { IssuerExchangesModule } from './issuer-exchanges/issuer-exchanges.module';
import { IssuerRelationshipsModule } from './issuer-relationships/issuer-relationships.module';

@Module({
  imports: [TickersModule, IssuersModule, ExchangesModule, InsidersModule, TransactionsModule, TrnNaturesModule, CurrenciesModule, SecurityDesignationsModule, TrnFlagsModule, IssuerSizesModule, IssuerExchangesModule, IssuerRelationshipsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

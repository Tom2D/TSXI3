import { Test, TestingModule } from '@nestjs/testing';
import { IssuerExchangesService } from './issuer-exchanges.service';

describe('IssuerExchangesService', () => {
  let service: IssuerExchangesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssuerExchangesService],
    }).compile();

    service = module.get<IssuerExchangesService>(IssuerExchangesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

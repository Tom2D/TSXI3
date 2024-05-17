import { Test, TestingModule } from '@nestjs/testing';
import { IssuerExchangesController } from './issuer-exchanges.controller';
import { IssuerExchangesService } from './issuer-exchanges.service';

describe('IssuerExchangesController', () => {
  let controller: IssuerExchangesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssuerExchangesController],
      providers: [IssuerExchangesService],
    }).compile();

    controller = module.get<IssuerExchangesController>(IssuerExchangesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

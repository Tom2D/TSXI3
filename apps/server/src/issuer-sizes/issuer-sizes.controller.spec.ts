import { Test, TestingModule } from '@nestjs/testing';
import { IssuerSizesController } from './issuer-sizes.controller';
import { IssuerSizesService } from './issuer-sizes.service';

describe('IssuerSizesController', () => {
  let controller: IssuerSizesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssuerSizesController],
      providers: [IssuerSizesService],
    }).compile();

    controller = module.get<IssuerSizesController>(IssuerSizesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

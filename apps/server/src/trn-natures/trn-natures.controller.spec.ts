import { Test, TestingModule } from '@nestjs/testing';
import { TrnNaturesController } from './trn-natures.controller';
import { TrnNaturesService } from './trn-natures.service';

describe('TrnNaturesController', () => {
  let controller: TrnNaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrnNaturesController],
      providers: [TrnNaturesService],
    }).compile();

    controller = module.get<TrnNaturesController>(TrnNaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

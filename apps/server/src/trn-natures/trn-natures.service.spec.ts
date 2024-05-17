import { Test, TestingModule } from '@nestjs/testing';
import { TrnNaturesService } from './trn-natures.service';

describe('TrnNaturesService', () => {
  let service: TrnNaturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrnNaturesService],
    }).compile();

    service = module.get<TrnNaturesService>(TrnNaturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

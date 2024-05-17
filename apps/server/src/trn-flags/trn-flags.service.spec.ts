import { Test, TestingModule } from '@nestjs/testing';
import { TrnFlagsService } from './trn-flags.service';

describe('TrnFlagsService', () => {
  let service: TrnFlagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrnFlagsService],
    }).compile();

    service = module.get<TrnFlagsService>(TrnFlagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

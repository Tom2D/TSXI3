import { Test, TestingModule } from '@nestjs/testing';
import { TrnFlagsController } from './trn-flags.controller';
import { TrnFlagsService } from './trn-flags.service';

describe('TrnFlagsController', () => {
  let controller: TrnFlagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrnFlagsController],
      providers: [TrnFlagsService],
    }).compile();

    controller = module.get<TrnFlagsController>(TrnFlagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

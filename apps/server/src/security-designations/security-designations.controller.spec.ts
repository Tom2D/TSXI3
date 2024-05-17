import { Test, TestingModule } from '@nestjs/testing';
import { SecurityDesignationsController } from './security-designations.controller';
import { SecurityDesignationsService } from './security-designations.service';

describe('SecurityDesignationsController', () => {
  let controller: SecurityDesignationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecurityDesignationsController],
      providers: [SecurityDesignationsService],
    }).compile();

    controller = module.get<SecurityDesignationsController>(SecurityDesignationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

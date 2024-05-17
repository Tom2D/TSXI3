import { Test, TestingModule } from '@nestjs/testing';
import { SecurityDesignationsService } from './security-designations.service';

describe('SecurityDesignationsService', () => {
  let service: SecurityDesignationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecurityDesignationsService],
    }).compile();

    service = module.get<SecurityDesignationsService>(SecurityDesignationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

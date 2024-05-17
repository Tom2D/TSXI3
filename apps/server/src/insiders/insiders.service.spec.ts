import { Test, TestingModule } from '@nestjs/testing';
import { InsidersService } from './insiders.service';

describe('InsidersService', () => {
  let service: InsidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsidersService],
    }).compile();

    service = module.get<InsidersService>(InsidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { IssuerSizesService } from './issuer-sizes.service';

describe('IssuerSizesService', () => {
  let service: IssuerSizesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssuerSizesService],
    }).compile();

    service = module.get<IssuerSizesService>(IssuerSizesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

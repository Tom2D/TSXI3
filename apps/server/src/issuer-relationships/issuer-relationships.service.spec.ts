import { Test, TestingModule } from '@nestjs/testing';
import { IssuerRelationshipsService } from './issuer-relationships.service';

describe('IssuerRelationshipsService', () => {
  let service: IssuerRelationshipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssuerRelationshipsService],
    }).compile();

    service = module.get<IssuerRelationshipsService>(IssuerRelationshipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

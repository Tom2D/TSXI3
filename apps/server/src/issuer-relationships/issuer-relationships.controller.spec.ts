import { Test, TestingModule } from '@nestjs/testing';
import { IssuerRelationshipsController } from './issuer-relationships.controller';
import { IssuerRelationshipsService } from './issuer-relationships.service';

describe('IssuerRelationshipsController', () => {
  let controller: IssuerRelationshipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssuerRelationshipsController],
      providers: [IssuerRelationshipsService],
    }).compile();

    controller = module.get<IssuerRelationshipsController>(IssuerRelationshipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { InsidersController } from './insiders.controller';
import { InsidersService } from './insiders.service';

describe('InsidersController', () => {
  let controller: InsidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsidersController],
      providers: [InsidersService],
    }).compile();

    controller = module.get<InsidersController>(InsidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

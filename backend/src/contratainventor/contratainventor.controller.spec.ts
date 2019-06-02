import { Test, TestingModule } from '@nestjs/testing';
import { ContratainventorController } from './contratainventor.controller';

describe('Contratainventor Controller', () => {
  let controller: ContratainventorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContratainventorController],
    }).compile();

    controller = module.get<ContratainventorController>(ContratainventorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

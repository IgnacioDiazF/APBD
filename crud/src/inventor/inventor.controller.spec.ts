import { Test, TestingModule } from '@nestjs/testing';
import { InventorController } from './inventor.controller';

describe('Inventor Controller', () => {
  let controller: InventorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventorController],
    }).compile();

    controller = module.get<InventorController>(InventorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

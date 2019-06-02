import { Test, TestingModule } from '@nestjs/testing';
import { InventoController } from './invento.controller';

describe('Invento Controller', () => {
  let controller: InventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoController],
    }).compile();

    controller = module.get<InventoController>(InventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

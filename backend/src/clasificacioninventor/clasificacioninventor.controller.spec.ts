import { Test, TestingModule } from '@nestjs/testing';
import { ClasificacioninventorController } from './clasificacioninventor.controller';

describe('Clasificacioninventor Controller', () => {
  let controller: ClasificacioninventorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClasificacioninventorController],
    }).compile();

    controller = module.get<ClasificacioninventorController>(ClasificacioninventorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PatenteController } from './patente.controller';

describe('Patente Controller', () => {
  let controller: PatenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatenteController],
    }).compile();

    controller = module.get<PatenteController>(PatenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

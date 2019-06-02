import { Test, TestingModule } from '@nestjs/testing';
import { AyudanteController } from './ayudante.controller';

describe('Ayudante Controller', () => {
  let controller: AyudanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AyudanteController],
    }).compile();

    controller = module.get<AyudanteController>(AyudanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

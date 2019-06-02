import { Test, TestingModule } from '@nestjs/testing';
import { RubroempresaController } from './rubroempresa.controller';

describe('Rubroempresa Controller', () => {
  let controller: RubroempresaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RubroempresaController],
    }).compile();

    controller = module.get<RubroempresaController>(RubroempresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

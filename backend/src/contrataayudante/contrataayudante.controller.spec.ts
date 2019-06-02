import { Test, TestingModule } from '@nestjs/testing';
import { ContrataayudanteController } from './contrataayudante.controller';

describe('Contrataayudante Controller', () => {
  let controller: ContrataayudanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContrataayudanteController],
    }).compile();

    controller = module.get<ContrataayudanteController>(ContrataayudanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

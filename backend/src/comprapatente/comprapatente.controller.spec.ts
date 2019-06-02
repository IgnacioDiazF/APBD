import { Test, TestingModule } from '@nestjs/testing';
import { ComprapatenteController } from './comprapatente.controller';

describe('Comprapatente Controller', () => {
  let controller: ComprapatenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComprapatenteController],
    }).compile();

    controller = module.get<ComprapatenteController>(ComprapatenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

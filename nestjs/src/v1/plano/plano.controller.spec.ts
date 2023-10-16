import { Test, TestingModule } from '@nestjs/testing';
import { PlanoController } from './plano.controller';
import { PlanoService } from './plano.service';

describe('PlanoController', () => {
  let controller: PlanoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanoController],
      providers: [PlanoService],
    }).compile();

    controller = module.get<PlanoController>(PlanoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

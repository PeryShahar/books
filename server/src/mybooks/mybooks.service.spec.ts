import { Test, TestingModule } from '@nestjs/testing';
import { MybooksService } from './mybooks.service';

describe('MybooksService', () => {
  let service: MybooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MybooksService],
    }).compile();

    service = module.get<MybooksService>(MybooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

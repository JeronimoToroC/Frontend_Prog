import { TestBed } from '@angular/core/testing';

import { RecordarJuradoService } from './recordar-jurado.service';

describe('RecordarJuradoService', () => {
  let service: RecordarJuradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordarJuradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

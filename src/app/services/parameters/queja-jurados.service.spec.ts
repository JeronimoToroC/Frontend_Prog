import { TestBed } from '@angular/core/testing';

import { QuejaJuradosService } from './queja-jurados.service';

describe('QuejaJuradosService', () => {
  let service: QuejaJuradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuejaJuradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

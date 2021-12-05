import { TestBed } from '@angular/core/testing';

import { SolicitudJuradoService } from './solicitud-jurado.service';

describe('SolicitudJuradoService', () => {
  let service: SolicitudJuradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudJuradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

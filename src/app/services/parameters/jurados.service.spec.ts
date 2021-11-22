import { TestBed } from '@angular/core/testing';

import { JuradosService } from './jurados.service';

describe('JuradosService', () => {
  let service: JuradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

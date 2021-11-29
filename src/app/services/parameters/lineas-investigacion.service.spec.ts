import { TestBed } from '@angular/core/testing';

import { LineasInvestigacionService } from './lineas-investigacion.service';

describe('lineas-investigacionService', () => {
  let service: LineasInvestigacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineasInvestigacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

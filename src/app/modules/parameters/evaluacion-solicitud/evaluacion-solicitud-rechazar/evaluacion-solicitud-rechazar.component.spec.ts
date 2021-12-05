import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionSolicitudRechazarComponent } from './evaluacion-solicitud-rechazar.component';

describe('EvaluacionSolicitudRechazarComponent', () => {
  let component: EvaluacionSolicitudRechazarComponent;
  let fixture: ComponentFixture<EvaluacionSolicitudRechazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionSolicitudRechazarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionSolicitudRechazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

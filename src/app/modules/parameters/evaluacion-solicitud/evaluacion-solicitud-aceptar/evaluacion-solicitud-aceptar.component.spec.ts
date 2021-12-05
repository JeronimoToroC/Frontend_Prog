import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionSolicitudAceptarComponent } from './evaluacion-solicitud-aceptar.component';

describe('EvaluacionSolicitudAceptarComponent', () => {
  let component: EvaluacionSolicitudAceptarComponent;
  let fixture: ComponentFixture<EvaluacionSolicitudAceptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionSolicitudAceptarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionSolicitudAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

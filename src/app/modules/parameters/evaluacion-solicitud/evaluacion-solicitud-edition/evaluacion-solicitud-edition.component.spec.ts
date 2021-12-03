import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionSolicitudEditionComponent } from './evaluacion-solicitud-edition.component';

describe('EvaluacionSolicitudEditionComponent', () => {
  let component: EvaluacionSolicitudEditionComponent;
  let fixture: ComponentFixture<EvaluacionSolicitudEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionSolicitudEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionSolicitudEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

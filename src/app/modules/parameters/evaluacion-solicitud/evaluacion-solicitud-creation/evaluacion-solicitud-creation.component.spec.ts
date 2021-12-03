import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionSolicitudCreationComponent } from './evaluacion-solicitud-creation.component';

describe('EvaluacionSolicitudCreationComponent', () => {
  let component: EvaluacionSolicitudCreationComponent;
  let fixture: ComponentFixture<EvaluacionSolicitudCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionSolicitudCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionSolicitudCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

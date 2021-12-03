import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEvaluacionSolicitudComponent } from './remove-evaluacion-solicitud.component';

describe('RemoveEvaluacionSolicitudComponent', () => {
  let component: RemoveEvaluacionSolicitudComponent;
  let fixture: ComponentFixture<RemoveEvaluacionSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveEvaluacionSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEvaluacionSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionSolicitudListComponent } from './evaluacion-solicitud-list.component';

describe('EvaluacionSolicitudListComponent', () => {
  let component: EvaluacionSolicitudListComponent;
  let fixture: ComponentFixture<EvaluacionSolicitudListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionSolicitudListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionSolicitudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

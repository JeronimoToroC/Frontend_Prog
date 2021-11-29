import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudCreationComponent } from './tipo-solicitud-creation.component';

describe('TipoSolicitudCreationComponent', () => {
  let component: TipoSolicitudCreationComponent;
  let fixture: ComponentFixture<TipoSolicitudCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

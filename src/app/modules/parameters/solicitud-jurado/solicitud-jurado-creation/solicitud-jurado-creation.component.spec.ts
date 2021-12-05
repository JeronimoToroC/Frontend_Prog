import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudJuradoCreationComponent } from './solicitud-jurado-creation.component';

describe('SolicitudJuradoCreationComponent', () => {
  let component: SolicitudJuradoCreationComponent;
  let fixture: ComponentFixture<SolicitudJuradoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudJuradoCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudJuradoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

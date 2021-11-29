import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudEditionComponent } from './tipo-solicitud-edition.component';

describe('TipoSolicitudEditionComponent', () => {
  let component: TipoSolicitudEditionComponent;
  let fixture: ComponentFixture<TipoSolicitudEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

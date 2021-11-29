import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteSolicitudEditionComponent } from './comite-solicitud-edition.component';

describe('ComiteSolicitudEditionComponent', () => {
  let component: ComiteSolicitudEditionComponent;
  let fixture: ComponentFixture<ComiteSolicitudEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteSolicitudEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteSolicitudEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

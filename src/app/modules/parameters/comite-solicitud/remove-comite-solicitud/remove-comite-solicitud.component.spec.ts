import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveComiteSolicitudComponent } from './remove-comite-solicitud.component';

describe('RemoveComiteSolicitudComponent', () => {
  let component: RemoveComiteSolicitudComponent;
  let fixture: ComponentFixture<RemoveComiteSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveComiteSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveComiteSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

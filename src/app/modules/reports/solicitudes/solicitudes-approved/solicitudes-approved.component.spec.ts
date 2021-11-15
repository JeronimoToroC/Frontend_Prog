import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesApprovedComponent } from './solicitudes-approved.component';

describe('SolicitudesApprovedComponent', () => {
  let component: SolicitudesApprovedComponent;
  let fixture: ComponentFixture<SolicitudesApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

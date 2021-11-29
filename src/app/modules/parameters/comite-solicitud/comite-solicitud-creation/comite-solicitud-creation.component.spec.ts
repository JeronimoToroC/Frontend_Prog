import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteSolicitudCreationComponent } from './comite-solicitud-creation.component';

describe('ComiteSolicitudCreationComponent', () => {
  let component: ComiteSolicitudCreationComponent;
  let fixture: ComponentFixture<ComiteSolicitudCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteSolicitudCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteSolicitudCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

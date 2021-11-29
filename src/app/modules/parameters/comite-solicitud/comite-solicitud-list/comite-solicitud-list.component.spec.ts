import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteSolicitudListComponent } from './comite-solicitud-list.component';

describe('ComiteSolicitudListComponent', () => {
  let component: ComiteSolicitudListComponent;
  let fixture: ComponentFixture<ComiteSolicitudListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteSolicitudListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteSolicitudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

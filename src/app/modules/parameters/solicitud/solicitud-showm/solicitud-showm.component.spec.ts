import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudShowmComponent } from './solicitud-showm.component';

describe('SolicitudShowmComponent', () => {
  let component: SolicitudShowmComponent;
  let fixture: ComponentFixture<SolicitudShowmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudShowmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudShowmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

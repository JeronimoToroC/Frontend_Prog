import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesCategoryComponent } from './solicitudes-category.component';

describe('SolicitudesCategoryComponent', () => {
  let component: SolicitudesCategoryComponent;
  let fixture: ComponentFixture<SolicitudesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

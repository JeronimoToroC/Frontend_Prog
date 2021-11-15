import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadPhotosComponent } from './facultad-photos.component';

describe('FacultadPhotosComponent', () => {
  let component: FacultadPhotosComponent;
  let fixture: ComponentFixture<FacultadPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

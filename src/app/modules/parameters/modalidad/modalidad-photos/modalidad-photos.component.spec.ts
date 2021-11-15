import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadPhotosComponent } from './modalidad-photos.component';

describe('ModalidadPhotosComponent', () => {
  let component: ModalidadPhotosComponent;
  let fixture: ComponentFixture<ModalidadPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

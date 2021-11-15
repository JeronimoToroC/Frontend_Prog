import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePhotosComponent } from './remove-photos.component';

describe('RemovePhotosComponent', () => {
  let component: RemovePhotosComponent;
  let fixture: ComponentFixture<RemovePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

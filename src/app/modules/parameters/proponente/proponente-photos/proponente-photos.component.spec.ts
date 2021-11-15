import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponentePhotosComponent } from './proponente-photos.component';

describe('ProponentePhotosComponent', () => {
  let component: ProponentePhotosComponent;
  let fixture: ComponentFixture<ProponentePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponentePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponentePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionListComponent } from './validacion-list.component';

describe('ValidacionListComponent', () => {
  let component: ValidacionListComponent;
  let fixture: ComponentFixture<ValidacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

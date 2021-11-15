import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionCreationComponent } from './validacion-creation.component';

describe('ValidacionCreationComponent', () => {
  let component: ValidacionCreationComponent;
  let fixture: ComponentFixture<ValidacionCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacionCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

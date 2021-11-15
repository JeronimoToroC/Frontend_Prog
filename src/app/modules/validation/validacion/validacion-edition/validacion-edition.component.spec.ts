import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionEditionComponent } from './validacion-edition.component';

describe('ValidacionEditionComponent', () => {
  let component: ValidacionEditionComponent;
  let fixture: ComponentFixture<ValidacionEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacionEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

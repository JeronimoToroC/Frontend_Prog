import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponentesYearComponent } from './proponentes-year.component';

describe('ProponentesYearComponent', () => {
  let component: ProponentesYearComponent;
  let fixture: ComponentFixture<ProponentesYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponentesYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponentesYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

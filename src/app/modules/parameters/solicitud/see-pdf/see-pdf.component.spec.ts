import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePdfComponent } from './see-pdf.component';

describe('SeePdfComponent', () => {
  let component: SeePdfComponent;
  let fixture: ComponentFixture<SeePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

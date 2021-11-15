import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradosEditionComponent } from './jurados-edition.component';

describe('JuradosEditionComponent', () => {
  let component: JuradosEditionComponent;
  let fixture: ComponentFixture<JuradosEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradosEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradosEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

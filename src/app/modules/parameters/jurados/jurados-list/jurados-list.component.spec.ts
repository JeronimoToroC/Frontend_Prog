import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradosListComponent } from './jurados-list.component';

describe('JuradosListComponent', () => {
  let component: JuradosListComponent;
  let fixture: ComponentFixture<JuradosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

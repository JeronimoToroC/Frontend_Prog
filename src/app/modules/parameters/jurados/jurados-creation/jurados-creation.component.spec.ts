import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradosCreationComponent } from './jurados-creation.component';

describe('JuradosCreationComponent', () => {
  let component: JuradosCreationComponent;
  let fixture: ComponentFixture<JuradosCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradosCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradosCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

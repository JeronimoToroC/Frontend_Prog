import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejaJuradosCreationComponent } from './queja-jurados-creation.component';

describe('QuejaJuradosCreationComponent', () => {
  let component: QuejaJuradosCreationComponent;
  let fixture: ComponentFixture<QuejaJuradosCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejaJuradosCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejaJuradosCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoCreationComponent } from './departamento-creation.component';

describe('DepartamentoCreationComponent', () => {
  let component: DepartamentoCreationComponent;
  let fixture: ComponentFixture<DepartamentoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

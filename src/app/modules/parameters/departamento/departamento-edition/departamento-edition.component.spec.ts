import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoEditionComponent } from './departamento-edition.component';

describe('DepartamentoEditionComponent', () => {
  let component: DepartamentoEditionComponent;
  let fixture: ComponentFixture<DepartamentoEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

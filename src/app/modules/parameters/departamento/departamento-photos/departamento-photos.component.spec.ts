import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoPhotosComponent } from './departamento-photos.component';

describe('DepartamentoPhotosComponent', () => {
  let component: DepartamentoPhotosComponent;
  let fixture: ComponentFixture<DepartamentoPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

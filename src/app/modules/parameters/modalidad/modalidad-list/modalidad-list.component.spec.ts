import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadListComponent } from './modalidad-list.component';

describe('ModalidadListComponent', () => {
  let component: ModalidadListComponent;
  let fixture: ComponentFixture<ModalidadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

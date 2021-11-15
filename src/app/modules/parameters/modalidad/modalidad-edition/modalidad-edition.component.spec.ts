import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadEditionComponent } from './modalidad-edition.component';

describe('ModalidadEditionComponent', () => {
  let component: ModalidadEditionComponent;
  let fixture: ComponentFixture<ModalidadEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

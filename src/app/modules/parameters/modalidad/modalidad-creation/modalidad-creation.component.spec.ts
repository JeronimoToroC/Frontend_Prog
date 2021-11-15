import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadCreationComponent } from './modalidad-creation.component';

describe('ModalidadCreationComponent', () => {
  let component: ModalidadCreationComponent;
  let fixture: ComponentFixture<ModalidadCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPrintComponent } from './factura-print.component';

describe('FacturaPrintComponent', () => {
  let component: FacturaPrintComponent;
  let fixture: ComponentFixture<FacturaPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

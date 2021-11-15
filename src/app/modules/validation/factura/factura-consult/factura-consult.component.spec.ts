import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaConsultComponent } from './factura-consult.component';

describe('FacturaConsultComponent', () => {
  let component: FacturaConsultComponent;
  let fixture: ComponentFixture<FacturaConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

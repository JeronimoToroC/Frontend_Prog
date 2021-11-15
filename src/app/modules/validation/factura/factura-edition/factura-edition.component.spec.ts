import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaEditionComponent } from './factura-edition.component';

describe('FacturaEditionComponent', () => {
  let component: FacturaEditionComponent;
  let fixture: ComponentFixture<FacturaEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

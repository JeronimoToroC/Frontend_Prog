import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVinculacionEditionComponent } from './tipo-vinculacion-edition.component';

describe('TipoVinculacionEditionComponent', () => {
  let component: TipoVinculacionEditionComponent;
  let fixture: ComponentFixture<TipoVinculacionEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoVinculacionEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoVinculacionEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

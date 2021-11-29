import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVinculacionListComponent } from './tipo-vinculacion-list.component';

describe('TipoVinculacionListComponent', () => {
  let component: TipoVinculacionListComponent;
  let fixture: ComponentFixture<TipoVinculacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoVinculacionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoVinculacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

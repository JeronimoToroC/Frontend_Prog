import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVinculacionCreationComponent } from './tipo-vinculacion-creation.component';

describe('TipoVinculacionCreationComponent', () => {
  let component: TipoVinculacionCreationComponent;
  let fixture: ComponentFixture<TipoVinculacionCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoVinculacionCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoVinculacionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarEstadoMesasComponent } from './cambiar-estado-mesas.component';

describe('CambiarEstadoMesasComponent', () => {
  let component: CambiarEstadoMesasComponent;
  let fixture: ComponentFixture<CambiarEstadoMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarEstadoMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarEstadoMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

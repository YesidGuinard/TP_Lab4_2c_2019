import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarTipoUsuarioComponent } from './asignar-tipo-usuario.component';

describe('AsignarTipoUsuarioComponent', () => {
  let component: AsignarTipoUsuarioComponent;
  let fixture: ComponentFixture<AsignarTipoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarTipoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonerClienteEnEsperaComponent } from './poner-cliente-en-espera.component';

describe('PonerClienteEnEsperaComponent', () => {
  let component: PonerClienteEnEsperaComponent;
  let fixture: ComponentFixture<PonerClienteEnEsperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonerClienteEnEsperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonerClienteEnEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

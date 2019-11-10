import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPedidosComponent } from './estado-pedidos.component';

describe('EstadoPedidosComponent', () => {
  let component: EstadoPedidosComponent;
  let fixture: ComponentFixture<EstadoPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPedidosAdminComponent } from './estado-pedidos-admin.component';

describe('EstadoPedidosAdminComponent', () => {
  let component: EstadoPedidosAdminComponent;
  let fixture: ComponentFixture<EstadoPedidosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoPedidosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoPedidosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

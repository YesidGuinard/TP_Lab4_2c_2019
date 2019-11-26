import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEnPreparacionComponent } from './pedidos-en-preparacion.component';

describe('PedidosEnPreparacionComponent', () => {
  let component: PedidosEnPreparacionComponent;
  let fixture: ComponentFixture<PedidosEnPreparacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosEnPreparacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosEnPreparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

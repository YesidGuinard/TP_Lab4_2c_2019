import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigosPedidosComponent } from './codigos-pedidos.component';

describe('CodigosPedidosComponent', () => {
  let component: CodigosPedidosComponent;
  let fixture: ComponentFixture<CodigosPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigosPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigosPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

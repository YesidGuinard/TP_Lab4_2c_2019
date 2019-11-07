import { TestBed } from '@angular/core/testing';

import { ClientePedidosService } from './cliente-pedidos.service';

describe('ClientePedidosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientePedidosService = TestBed.get(ClientePedidosService);
    expect(service).toBeTruthy();
  });
});

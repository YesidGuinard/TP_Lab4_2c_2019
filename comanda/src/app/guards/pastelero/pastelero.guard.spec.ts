import { TestBed, async, inject } from '@angular/core/testing';

import { PasteleroGuard } from './pastelero.guard';

describe('PasteleroGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasteleroGuard]
    });
  });

  it('should ...', inject([PasteleroGuard], (guard: PasteleroGuard) => {
    expect(guard).toBeTruthy();
  }));
});

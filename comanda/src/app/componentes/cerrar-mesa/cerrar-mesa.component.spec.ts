import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarMesaComponent } from './cerrar-mesa.component';

describe('CerrarMesaComponent', () => {
  let component: CerrarMesaComponent;
  let fixture: ComponentFixture<CerrarMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerrarMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

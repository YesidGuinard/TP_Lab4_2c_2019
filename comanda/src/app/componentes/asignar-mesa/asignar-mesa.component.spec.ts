import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarMesaComponent } from './asignar-mesa.component';

describe('AsignarMesaComponent', () => {
  let component: AsignarMesaComponent;
  let fixture: ComponentFixture<AsignarMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

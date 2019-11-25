import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirMesaMozoComponent } from './elegir-mesa-mozo.component';

describe('ElegirMesaMozoComponent', () => {
  let component: ElegirMesaMozoComponent;
  let fixture: ComponentFixture<ElegirMesaMozoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegirMesaMozoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirMesaMozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

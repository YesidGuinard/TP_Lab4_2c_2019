import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriasComponent } from './calorias.component';

describe('CaloriasComponent', () => {
  let component: CaloriasComponent;
  let fixture: ComponentFixture<CaloriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

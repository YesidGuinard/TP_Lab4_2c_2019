import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteleroComponent } from './pastelero.component';

describe('PasteleroComponent', () => {
  let component: PasteleroComponent;
  let fixture: ComponentFixture<PasteleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

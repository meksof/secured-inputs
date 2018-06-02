import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalPasswordInputComponent } from './numerical-password-input.component';

describe('NumericalPasswordInputComponent', () => {
  let component: NumericalPasswordInputComponent;
  let fixture: ComponentFixture<NumericalPasswordInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericalPasswordInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericalPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

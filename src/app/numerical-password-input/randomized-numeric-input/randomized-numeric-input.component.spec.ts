import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizedNumericInputComponent } from './randomized-numeric-input.component';

describe('RandomizedNumericInputComponent', () => {
  let component: RandomizedNumericInputComponent;
  let fixture: ComponentFixture<RandomizedNumericInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomizedNumericInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizedNumericInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

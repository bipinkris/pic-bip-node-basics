import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldCalculatorInputComponent } from './meld-calculator-input.component';

describe('MeldCalculatorInputComponent', () => {
  let component: MeldCalculatorInputComponent;
  let fixture: ComponentFixture<MeldCalculatorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldCalculatorInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeldCalculatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

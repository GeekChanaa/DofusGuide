/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HdvPricesComponent } from './hdv-prices.component';

describe('HdvPricesComponent', () => {
  let component: HdvPricesComponent;
  let fixture: ComponentFixture<HdvPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdvPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdvPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

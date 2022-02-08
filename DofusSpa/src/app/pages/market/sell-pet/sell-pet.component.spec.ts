/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellPetComponent } from './sell-pet.component';

describe('SellPetComponent', () => {
  let component: SellPetComponent;
  let fixture: ComponentFixture<SellPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

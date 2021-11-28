/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DressingRoomComponent } from './dressing-room.component';

describe('DressingRoomComponent', () => {
  let component: DressingRoomComponent;
  let fixture: ComponentFixture<DressingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

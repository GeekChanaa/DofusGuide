/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MountComponent } from './mount.component';

describe('MountComponent', () => {
  let component: MountComponent;
  let fixture: ComponentFixture<MountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

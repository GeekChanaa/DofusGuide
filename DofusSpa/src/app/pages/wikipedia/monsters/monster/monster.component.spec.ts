/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonsterComponent } from './monster.component';

describe('MonsterComponent', () => {
  let component: MonsterComponent;
  let fixture: ComponentFixture<MonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

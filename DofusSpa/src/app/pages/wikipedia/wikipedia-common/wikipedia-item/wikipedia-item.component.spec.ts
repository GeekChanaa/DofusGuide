/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WikipediaItemComponent } from './wikipedia-item.component';

describe('WikipediaItemComponent', () => {
  let component: WikipediaItemComponent;
  let fixture: ComponentFixture<WikipediaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikipediaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

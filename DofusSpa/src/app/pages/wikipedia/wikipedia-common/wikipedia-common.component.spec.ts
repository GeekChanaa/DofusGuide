/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WikipediaCommonComponent } from './wikipedia-common.component';

describe('WikipediaCommonComponent', () => {
  let component: WikipediaCommonComponent;
  let fixture: ComponentFixture<WikipediaCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikipediaCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

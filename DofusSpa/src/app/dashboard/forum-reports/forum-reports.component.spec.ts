import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumReportsComponent } from './forum-reports.component';

describe('ForumReportsComponent', () => {
  let component: ForumReportsComponent;
  let fixture: ComponentFixture<ForumReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

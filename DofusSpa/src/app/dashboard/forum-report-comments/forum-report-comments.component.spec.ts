import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumReportCommentsComponent } from './forum-report-comments.component';

describe('ForumReportCommentsComponent', () => {
  let component: ForumReportCommentsComponent;
  let fixture: ComponentFixture<ForumReportCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumReportCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumReportCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

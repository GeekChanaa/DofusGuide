import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumReportRepliesComponent } from './forum-report-replies.component';

describe('ForumReportRepliesComponent', () => {
  let component: ForumReportRepliesComponent;
  let fixture: ComponentFixture<ForumReportRepliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumReportRepliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumReportRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

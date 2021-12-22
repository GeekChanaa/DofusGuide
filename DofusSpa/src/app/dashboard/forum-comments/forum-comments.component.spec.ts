import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCommentsComponent } from './forum-comments.component';

describe('ForumCommentsComponent', () => {
  let component: ForumCommentsComponent;
  let fixture: ComponentFixture<ForumCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

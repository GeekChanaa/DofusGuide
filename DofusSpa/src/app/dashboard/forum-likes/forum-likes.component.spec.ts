import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumLikesComponent } from './forum-likes.component';

describe('ForumLikesComponent', () => {
  let component: ForumLikesComponent;
  let fixture: ComponentFixture<ForumLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

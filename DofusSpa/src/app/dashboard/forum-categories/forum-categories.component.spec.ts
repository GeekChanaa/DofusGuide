import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCategoriesComponent } from './forum-categories.component';

describe('ForumCategoriesComponent', () => {
  let component: ForumCategoriesComponent;
  let fixture: ComponentFixture<ForumCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

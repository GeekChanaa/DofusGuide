import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDropsComponent } from './monster-drops.component';

describe('MonsterDropsComponent', () => {
  let component: MonsterDropsComponent;
  let fixture: ComponentFixture<MonsterDropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterDropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterDropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

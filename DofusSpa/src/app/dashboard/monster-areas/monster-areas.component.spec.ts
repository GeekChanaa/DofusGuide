import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterAreasComponent } from './monster-areas.component';

describe('MonsterAreasComponent', () => {
  let component: MonsterAreasComponent;
  let fixture: ComponentFixture<MonsterAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

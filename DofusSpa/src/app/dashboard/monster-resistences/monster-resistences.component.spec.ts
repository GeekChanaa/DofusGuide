import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterResistencesComponent } from './monster-resistences.component';

describe('MonsterResistencesComponent', () => {
  let component: MonsterResistencesComponent;
  let fixture: ComponentFixture<MonsterResistencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterResistencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterResistencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

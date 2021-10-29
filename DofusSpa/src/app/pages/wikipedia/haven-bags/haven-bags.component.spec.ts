import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavenBagsComponent } from './haven-bags.component';

describe('HavenBagsComponent', () => {
  let component: HavenBagsComponent;
  let fixture: ComponentFixture<HavenBagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavenBagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavenBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

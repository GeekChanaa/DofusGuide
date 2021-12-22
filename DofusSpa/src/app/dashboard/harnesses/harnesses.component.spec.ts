import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarnessesComponent } from './harnesses.component';

describe('HarnessesComponent', () => {
  let component: HarnessesComponent;
  let fixture: ComponentFixture<HarnessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarnessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

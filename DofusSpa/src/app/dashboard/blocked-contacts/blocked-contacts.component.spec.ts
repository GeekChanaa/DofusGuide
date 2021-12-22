import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedContactsComponent } from './blocked-contacts.component';

describe('BlockedContactsComponent', () => {
  let component: BlockedContactsComponent;
  let fixture: ComponentFixture<BlockedContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

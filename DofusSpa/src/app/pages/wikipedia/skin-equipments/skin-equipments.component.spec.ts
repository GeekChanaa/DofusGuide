import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinEquipmentsComponent } from './skin-equipments.component';

describe('SkinEquipmentsComponent', () => {
  let component: SkinEquipmentsComponent;
  let fixture: ComponentFixture<SkinEquipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinEquipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

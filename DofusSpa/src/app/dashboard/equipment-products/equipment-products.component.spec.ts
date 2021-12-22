import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentProductsComponent } from './equipment-products.component';

describe('EquipmentProductsComponent', () => {
  let component: EquipmentProductsComponent;
  let fixture: ComponentFixture<EquipmentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

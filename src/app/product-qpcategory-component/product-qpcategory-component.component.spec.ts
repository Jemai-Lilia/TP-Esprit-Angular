import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQPCategoryComponentComponent } from './product-qpcategory-component.component';

describe('ProductQPCategoryComponentComponent', () => {
  let component: ProductQPCategoryComponentComponent;
  let fixture: ComponentFixture<ProductQPCategoryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductQPCategoryComponentComponent]
    });
    fixture = TestBed.createComponent(ProductQPCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

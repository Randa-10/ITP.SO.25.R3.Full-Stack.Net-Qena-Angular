import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetials } from './products-detials';

describe('ProductsDetials', () => {
  let component: ProductsDetials;
  let fixture: ComponentFixture<ProductsDetials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsDetials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDetials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

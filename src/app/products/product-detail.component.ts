import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService} from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Détail du produit';
  product: IProduct;

  constructor(private _router: Router, private _route: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit() {
    const id: number = +this._route.snapshot.paramMap.get('id');
    this._productService.getProducts()
        .subscribe(products => {
            const allProducts = products;
            this.product = allProducts.find(product => product.productId === id);
        });
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}

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
  errorMessage: string;

  constructor(private _router: Router, private _route: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit() {
    const id: number = +this._route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(id: number) {
    this._productService.getProduct(id)
        .subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error
        );
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}

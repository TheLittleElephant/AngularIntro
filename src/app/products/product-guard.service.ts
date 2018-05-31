import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductService } from './product.service';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router, private _productService: ProductService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     const id = +route.url[1].path;
     if (isNaN(id) || id < 1) {
        this._router.navigate(['/error']);
        return false;
     }
     return true;
   }

}

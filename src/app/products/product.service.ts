import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { map } from 'rxjs/operators';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Injectable()
export class ProductService {
    private _productUrl: string = './api/products/products.json';
    // private _productUrl: string = 'http://localhost:3000/api/products';
    // Quand on utilise un serveur localhost, créer un fichier proxy.js et
    // ajouter --proxy-config <nom fichier proxy> à la commande ng serve

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
                   .do(data => console.log('JSON : '  + JSON.stringify(data)))
                   .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts().pipe(
            map((products: IProduct[]) =>
                products.find(p => p.productId === id)));
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        console.log(err.headers);
        return Observable.throw(err.message);
    }
}

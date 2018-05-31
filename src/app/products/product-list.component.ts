import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Liste des produits';
    imageWidth: number = 130;
    imageHeight: number = 130;
    showImage: boolean = false;
    productsListFilter: string;
    filteredProductsList: IProduct[];
    products: IProduct[] = [];
    errorMessage: string;

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        console.log('Dans la méthode ngOnInit');
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProductsList = this.products;
            },
            error => this.errorMessage = <any>error
        );
    }

    get listFilter(): string {
        return this.productsListFilter;
    }

    set listFilter(filter: string) {
        this.productsListFilter = filter;
        this.filteredProductsList = this.productsListFilter ? this.filter() : this.products;
        // le setter est appelé automatiquement grâce à listFilter dans le HTML
        // si le filtre existe alors on filtre sinon on définit
        // la liste filtrée comme la liste de tous les produits
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
        // si showImage est false alors showImage devient true
        // si showImage est true alors showImage devient false
    }

    filter(): IProduct[] {
        const filteredProductsList: IProduct[] = [];
        for (const product of this.products) {
            if (product.productName.toLowerCase().includes(this.listFilter.toLowerCase())) {
                filteredProductsList.push(product);
            }
        }
        return filteredProductsList;
    }

    /** Autre technique :
     *      filter(filterBy: string): IProduct[] {
     *       const filter: string = filterBy.toLocaleLowerCase();
     *       return this.products.filter((product: IProduct) =>
     *          product.productName.toLocaleLowerCase().indexOf(filter) !== -1);
     *       }
     */

     onRatingClicked(message: string): void {
        this.pageTitle = 'La liste de produits dit : '
                         + message;
     }

}

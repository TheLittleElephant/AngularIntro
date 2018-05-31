import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <a href="" class="navbar-brand">{{ pageTitle }}</a>
            <ul class="nav navbar-nav">
                <li><a [routerLink]="['/home']">Accueil</a></li>
                <li><a [routerLink]="['/products']">Liste des produits</a></li>
            </ul>
        </div>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Ma première application Angular';
}

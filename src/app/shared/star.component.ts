import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

// Composant enfant (nested component)
@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // Quand le composant parent change le rating,
    // il faut recalculer la taille des étoiles,
    // on doit donc implémenter OnChanges

    // Pour passer une donnée du parent à l'enfant,
    // on utilise le décorateur @Input
    // on lie ensuite la propriété dans le HTML :
    // [rating]="product.starRating"
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
        // la div fait une largeur de 86px et il y a 5 étoiles, on
        // multiplie donc le rating par 86 divisé par 5
    }

    onClick(): void {
        this.ratingClicked.emit(`La note de ${this.rating} a été cliquée !`);
    }
}

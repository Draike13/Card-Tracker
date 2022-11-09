import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Card-Tracker';
  cards: any;
  cardToDisplay: number = 0;

  constructor(public http: HttpClient) {
    this.http
      .get(
        'https://api.pokemontcg.io/v2/cards?q=name:eevee&orderBy=id&key=20d4e68d-e4a9-487f-a80a-9120e2012c39'
      )
      .subscribe((cards) => (this.cards = cards));
  }
  findCard() {
    console.log(this.cards.data[0].images.small);
  }

  cardIndex() {
    return this.cardToDisplay;
  }
}

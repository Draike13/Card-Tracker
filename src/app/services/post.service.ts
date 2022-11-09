import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  cards: any;
  public url =
    'https://api.pokemontcg.io/v2/cards?q=name:eevee&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  constructor(public httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient
      .get(this.url)
      .subscribe((cards) => (this.cards = cards));
  }
}

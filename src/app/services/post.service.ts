import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  cards: any;
  public eeveeUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:eevee&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public sylveonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:sylveon&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public espeonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:espeon&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public umbreonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:umbreon&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public leafeonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:leafeon&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public glaceonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:glaceon&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public vaporeonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:vaporeon&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public flareonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:flareon&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public jolteonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:jolteon&orderBy=id&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  constructor(public httpClient: HttpClient) {}

  getEeveePosts() {
    return this.httpClient
      .get(this.eeveeUrl)
      .subscribe((cards) => (this.cards = cards));
  }

  getSylveonPosts() {
    return this.httpClient
      .get(this.sylveonUrl)
      .subscribe((cards) => (this.cards = cards));
  }

  getEspeonPosts() {
    return this.httpClient
      .get(this.espeonUrl)
      .subscribe((cards) => (this.cards = cards));
  }

  getUmbreonPosts() {
    return this.httpClient
      .get(this.umbreonUrl)
      .subscribe((cards) => (this.cards = cards));
  }

  getLeafeonPosts() {
    return this.httpClient
      .get(this.leafeonUrl)
      .subscribe((cards) => (this.cards = cards));
  }

  getGlaceonPosts() {
    return this.httpClient
      .get(this.glaceonUrl)
      .subscribe((cards) => (this.cards = cards));
  }

  getVaporeonPosts() {
    return this.httpClient
      .get(this.vaporeonUrl)
      .subscribe((cards) => (this.cards = cards));
  }

  getFlareonPosts() {
    return this.httpClient
      .get(this.flareonUrl)
      .subscribe((cards) => (this.cards = cards));
  }

  getJolteonPosts() {
    return this.httpClient
      .get(this.jolteonUrl)
      .subscribe((cards) => (this.cards = cards));
  }
}

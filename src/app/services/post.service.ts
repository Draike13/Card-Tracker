import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  cards: any;
  public eeveeUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:eevee&orderBy=set.releaseDate&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public sylveonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:sylveon&orderBy=set.releaseDate&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public espeonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:espeon&orderBy=set.releaseDate&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public umbreonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:umbreon&orderBy=set.releaseDate&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public leafeonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:leafeon&orderBy=set.releaseDate&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public glaceonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:glaceon&orderBy=set.releaseDate&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public vaporeonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:vaporeon&orderBy=set.releaseDate&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public flareonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:flareon&orderBy=set.releaseDate&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  public jolteonUrl =
    'https://api.pokemontcg.io/v2/cards?q=name:jolteon&orderBy=set.releaseDate&key=4ce2ce8d-73ee-43ef-9f20-3bede0b8d5b2';

  constructor(public httpClient: HttpClient) {}

  getPosts(url: string) {
    return this.httpClient.get(url);
  }
}

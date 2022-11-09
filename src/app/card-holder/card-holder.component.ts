import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.css'],
})
export class CardHolderComponent implements OnInit {
  cardToDisplay: number = 0;
  largeCard: any;

  constructor(public postService: PostService) {}

  ngOnInit(): void {}

  cardIndex() {
    return this.cardToDisplay;
  }

  showLargeCard() {
    this.largeCard = this.postService.cards.data[0].images.large;
  }
}

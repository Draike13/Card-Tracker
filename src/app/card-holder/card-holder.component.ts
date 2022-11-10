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
  eeveeImages: string[] = [];
  sylveonImages: string[] = [];
  espeonImages: string[] = [];
  umbreonImages: string[] = [];

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.postService.getEeveePosts().subscribe((response: any) => {
      const cards = response.data.map((card: any) => {
        return card.images.small;
      });
      this.eeveeImages = cards;
    });

    this.postService.getSylveonPosts().subscribe((response: any) => {
      const cards = response.data.map((card: any) => {
        return card.images.small;
      });
      this.sylveonImages = cards;
    });

    this.postService.getEspeonPosts().subscribe((response: any) => {
      const cards = response.data.map((card: any) => {
        return card.images.small;
      });
      this.espeonImages = cards;
    });

    this.postService.getUmbreonPosts().subscribe((response: any) => {
      const cards = response.data.map((card: any) => {
        return card.images.small;
      });
      this.umbreonImages = cards;
    });
  }
}

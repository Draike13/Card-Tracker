import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.css'],
})
export class CardHolderComponent implements OnInit {
  eeveeImages: string[] = [];
  sylveonImages: string[] = [];
  espeonImages: string[] = [];
  umbreonImages: string[] = [];
  leafeonImages: string[] = [];
  glaceonImages: string[] = [];
  vaporeonImages: string[] = [];
  flareonImages: string[] = [];
  jolteonImages: string[] = [];

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.postService
      .getPosts(this.postService.eeveeUrl)
      .subscribe((response: any) => {
        const cards = response.data.map((card: any) => {
          return card.images;
        });
        this.eeveeImages = cards;
      });

    this.postService
      .getPosts(this.postService.sylveonUrl)
      .subscribe((response: any) => {
        const cards = response.data.map((card: any) => {
          return card.images;
        });
        this.sylveonImages = cards;
      });

    this.postService
      .getPosts(this.postService.espeonUrl)
      .subscribe((response: any) => {
        const cards = response.data.map((card: any) => {
          return card.images;
        });
        this.espeonImages = cards;
      });

    this.postService
      .getPosts(this.postService.umbreonUrl)
      .subscribe((response: any) => {
        const cards = response.data.map((card: any) => {
          return card.images;
        });
        this.umbreonImages = cards;
      });

    this.postService
      .getPosts(this.postService.leafeonUrl)
      .subscribe((response: any) => {
        const cards = response.data.map((card: any) => {
          return card.images;
        });
        this.leafeonImages = cards;
      });

    this.postService
      .getPosts(this.postService.glaceonUrl)
      .subscribe((response: any) => {
        const cards = response.data.map((card: any) => {
          return card.images;
        });
        this.glaceonImages = cards;
      });

    this.postService
      .getPosts(this.postService.vaporeonUrl)
      .subscribe((response: any) => {
        const cards = response.data.map((card: any) => {
          return card.images;
        });
        this.vaporeonImages = cards;
      });

    this.postService
      .getPosts(this.postService.flareonUrl)
      .subscribe((response: any) => {
        const cards = response.data.map((card: any) => {
          return card.images;
        });
        this.flareonImages = cards;
      });

    this.postService
      .getPosts(this.postService.jolteonUrl)
      .subscribe((response: any) => {
        const cards = response.data.map((card: any) => {
          return card.images;
        });
        this.jolteonImages = cards;
      });
  }
}

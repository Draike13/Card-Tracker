import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dialog-large-card',
  templateUrl: './dialog-large-card.component.html',
  styleUrls: ['./dialog-large-card.component.css'],
})
export class DialogLargeCardComponent implements OnInit {
  largeEeveeImage: string = '';

  constructor(
    public postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit(): void {
    this.postService
      .getPosts(this.postService.eeveeUrl)
      .subscribe((response: any) => {
        const cards = response.data[this.data].images.large;
        console.log(this.data);
        this.largeEeveeImage = cards;
        console.log(this.largeEeveeImage);
      });
  }
}

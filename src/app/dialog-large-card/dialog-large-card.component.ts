import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dialog-large-card',
  templateUrl: './dialog-large-card.component.html',
  styleUrls: ['./dialog-large-card.component.css'],
})
export class DialogLargeCardComponent implements OnInit {
  constructor(
    public postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() eeveeImage: string = '';
  @Input() i: any = '';

  constructor() {}

  ngOnInit(): void {}

  makeGrayscale(index: number) {
    this.isVisited = !this.isVisited;
  }
}

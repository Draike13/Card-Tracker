import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leafeon-card',
  templateUrl: './leafeon-card.component.html',
  styleUrls: ['./leafeon-card.component.css'],
})
export class LeafeonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() leafeonImage: string = '';
  @Input() i: any = '';

  constructor() {}

  ngOnInit(): void {}
  makeGrayscale() {
    this.isVisited = !this.isVisited;
  }
}

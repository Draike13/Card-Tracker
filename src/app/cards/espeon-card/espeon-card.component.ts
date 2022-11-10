import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-espeon-card',
  templateUrl: './espeon-card.component.html',
  styleUrls: ['./espeon-card.component.css'],
})
export class EspeonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() espeonImage: string = '';
  @Input() i: any = '';

  constructor() {}

  ngOnInit(): void {}
  makeGrayscale(index: number) {
    this.isVisited = !this.isVisited;
  }
}

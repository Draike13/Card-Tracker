import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-glaceon-card',
  templateUrl: './glaceon-card.component.html',
  styleUrls: ['./glaceon-card.component.css'],
})
export class GlaceonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() glaceonImage: string = '';
  @Input() i: any = '';

  constructor() {}

  ngOnInit(): void {}
  makeGrayscale(index: number) {
    this.isVisited = !this.isVisited;
  }
}

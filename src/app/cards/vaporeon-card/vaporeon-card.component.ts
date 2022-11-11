import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vaporeon-card',
  templateUrl: './vaporeon-card.component.html',
  styleUrls: ['./vaporeon-card.component.css'],
})
export class VaporeonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() vaporeonImage: string = '';
  @Input() i: any = '';

  constructor() {}

  ngOnInit(): void {}

  makeGrayscale(index: number) {
    this.isVisited = !this.isVisited;
  }
}

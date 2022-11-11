import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flareon-card',
  templateUrl: './flareon-card.component.html',
  styleUrls: ['./flareon-card.component.css'],
})
export class FlareonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() flareonImage: string = '';
  @Input() i: any = '';
  constructor() {}

  ngOnInit(): void {}

  makeGrayscale() {
    this.isVisited = !this.isVisited;
  }
}

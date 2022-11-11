import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-umbreon-card',
  templateUrl: './umbreon-card.component.html',
  styleUrls: ['./umbreon-card.component.css'],
})
export class UmbreonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() umbreonImage: string = '';
  @Input() i: any = '';

  constructor() {}

  ngOnInit(): void {}
  makeGrayscale() {
    this.isVisited = !this.isVisited;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eevee-card',
  templateUrl: './eevee-card.component.html',
  styleUrls: ['./eevee-card.component.css'],
})
export class EeveeCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() eeveeImage: string = '';
  @Input() i: any = '';

  constructor() {}

  ngOnInit(): void {}

  makeGrayscale(index: number) {
    this.isVisited = !this.isVisited;
  }
}

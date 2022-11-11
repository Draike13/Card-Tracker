import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jolteon-card',
  templateUrl: './jolteon-card.component.html',
  styleUrls: ['./jolteon-card.component.css']
})
export class JolteonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() jolteonImage: string = '';
  @Input() i: any = '';
  constructor() { }

  ngOnInit(): void {}
  makeGrayscale(index: number) {
    this.isVisited = !this.isVisited;
  }
}

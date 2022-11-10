import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sylveon-card',
  templateUrl: './sylveon-card.component.html',
  styleUrls: ['./sylveon-card.component.css'],
})
export class SylveonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() sylveonImage: string = '';
  @Input() i: any = '';

  constructor() {}

  ngOnInit(): void {}
  makeGrayscale(index: number) {
    this.isVisited = !this.isVisited;
  }
}

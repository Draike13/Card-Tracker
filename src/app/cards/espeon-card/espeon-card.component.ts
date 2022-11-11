import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLargeCardComponent } from 'src/app/dialog-large-card/dialog-large-card.component';

@Component({
  selector: 'app-espeon-card',
  templateUrl: './espeon-card.component.html',
  styleUrls: ['./espeon-card.component.css'],
})
export class EspeonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() espeonImage: any = '';
  @Input() i: any = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  makeGrayscale() {
    this.isVisited = !this.isVisited;
  }

  openLargeCard(image: string) {
    this.dialog.open(DialogLargeCardComponent, { data: image });
  }
}

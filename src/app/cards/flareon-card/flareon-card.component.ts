import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLargeCardComponent } from 'src/app/dialog-large-card/dialog-large-card.component';
@Component({
  selector: 'app-flareon-card',
  templateUrl: './flareon-card.component.html',
  styleUrls: ['./flareon-card.component.css'],
})
export class FlareonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() flareonImage: any = '';
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

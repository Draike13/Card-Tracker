import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLargeCardComponent } from 'src/app/dialog-large-card/dialog-large-card.component';
@Component({
  selector: 'app-leafeon-card',
  templateUrl: './leafeon-card.component.html',
  styleUrls: ['./leafeon-card.component.css'],
})
export class LeafeonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() leafeonImage: any = '';
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

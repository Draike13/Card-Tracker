import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLargeCardComponent } from 'src/app/dialog-large-card/dialog-large-card.component';
@Component({
  selector: 'app-vaporeon-card',
  templateUrl: './vaporeon-card.component.html',
  styleUrls: ['./vaporeon-card.component.css'],
})
export class VaporeonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() vaporeonImage: any = '';
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

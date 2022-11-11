import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { DialogLargeCardComponent } from 'src/app/dialog-large-card/dialog-large-card.component';

@Component({
  selector: 'app-eevee-card',
  templateUrl: './eevee-card.component.html',
  styleUrls: ['./eevee-card.component.css'],
})
export class EeveeCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() eeveeImage: any = '';
  @Input() i: any = '';
  @Input() id: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  makeGrayscale() {
    this.isVisited = !this.isVisited;
  }

  openLargeCard(image: string) {
    this.dialog.open(DialogLargeCardComponent, { data: image });
  }
}

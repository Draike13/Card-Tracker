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

  @Input() eeveeImage: string = '';
  @Input() i: any = '';
  @Input() id: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  makeGrayscale(index: number) {
    this.isVisited = !this.isVisited;
  }

  openLargeCard(index: number) {
    this.dialog.open(DialogLargeCardComponent, { data: index });
  }
}

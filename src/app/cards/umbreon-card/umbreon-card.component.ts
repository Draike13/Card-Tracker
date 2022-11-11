import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLargeCardComponent } from 'src/app/dialog-large-card/dialog-large-card.component';
@Component({
  selector: 'app-umbreon-card',
  templateUrl: './umbreon-card.component.html',
  styleUrls: ['./umbreon-card.component.css'],
})
export class UmbreonCardComponent implements OnInit {
  isVisited: boolean = false;

  @Input() umbreonImage: any = '';
  @Input() i: any = '';

  constructor(public dialog:MatDialog) {}

  ngOnInit(): void {}
  makeGrayscale() {
    this.isVisited = !this.isVisited;
  }

  openLargeCard(image: string) {
    this.dialog.open(DialogLargeCardComponent, { data: image });
  }
}

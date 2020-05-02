import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ShowSearchComponent } from "../show-search/show-search.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit() {}

  add() {
    const dialogRef = this._dialog.open(
      ShowSearchComponent,
      {
        width: "300px"
      }
    );
  }
}

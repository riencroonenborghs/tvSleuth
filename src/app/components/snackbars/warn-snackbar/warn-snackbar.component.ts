import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-warn-snackbar',
  templateUrl: './warn-snackbar.component.html',
  styleUrls: ['./warn-snackbar.component.sass']
})
export class WarnSnackbarComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}

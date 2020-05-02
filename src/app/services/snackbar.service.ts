import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ErrorSnackbarComponent } from "@components/snackbars/error-snackbar/error-snackbar.component";
import { WarnSnackbarComponent } from "@components/snackbars/warn-snackbar/warn-snackbar.component";
import { SuccessSnackbarComponent } from "@components/snackbars/success-snackbar/success-snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private DELAY: number = 3;

  constructor(
    private _matSnackBar: MatSnackBar
  ) { }

  showError(message: string) {
    this._show("error", message);
  }

  showWarning(message: string) {
    this._show("warning", message);
  }

  showSuccess(message: string) {
    this._show("success", message);
  }

  private _show(type: string, message: string) {
    let component: any;
    let panelClass: string;
    switch(type) {
      case "error":
        component = ErrorSnackbarComponent;
        panelClass = 'error-snackbar';
        break;
      case "warning":
        component = WarnSnackbarComponent;
        panelClass = 'warning-snackbar';
        break;
      case "success":
        component = SuccessSnackbarComponent;
        panelClass = 'success-snackbar';
        break;
    } 

    this._matSnackBar.openFromComponent(
      component,
      {
        data: message,
        duration: this.DELAY * 1000,
        panelClass: [panelClass]
      }
    );
  }


}

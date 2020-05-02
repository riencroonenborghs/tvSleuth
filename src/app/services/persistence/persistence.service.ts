import { Injectable } from '@angular/core';

import { LogService } from "@services/log.service";
import { SnackbarService } from "@services/snackbar.service";

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  private _storeKey: string = "tvSleuth";

  constructor(
    protected _logService: LogService,
    protected _snackbarService: SnackbarService
  ) { }

  protected saveData(data: string): Promise<boolean> {
    this._logService.log("PersistenceService -- saving");
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(
          this._storeKey,
          data
        );
        this._logService.log("PersistenceService -- saved");
        this._snackbarService.showSuccess("Saved!");
        resolve(true);
      } catch(_) {
        this._logService.error("PersistenceService -- something went wrong");
        this._snackbarService.showError("Bah, something went wrong :(");
        resolve(false);
      }
    });
  }

  protected loadData(): Promise<any> {
    this._logService.log("PersistenceService -- loading");
    return new Promise((resolve, reject) => {
      let storageData = localStorage.getItem(this._storeKey);
      this._logService.log("PersistenceService -- from storage:");
      this._logService.log(storageData);
      if(storageData != null) {
        this._logService.log("PersistenceService -- loaded");
        resolve(JSON.parse(storageData));
      } else {
        this._logService.error("PersistenceService -- something went wrong");
        resolve(null);
      }
    });
  }
}

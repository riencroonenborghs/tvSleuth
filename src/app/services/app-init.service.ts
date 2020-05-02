import { Injectable } from '@angular/core';

import { LogService } from "@services/log.service";
import { FollowService } from "@services/persistence/follow.service";

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private _logService: LogService,
    private _followService: FollowService    
  ) {}

  load(): Promise<boolean> {
    this._logService.log("AppInitService -- loading settings");
    return new Promise((resolve, reject) => {
      this._followService.load().then(
        res => {
          this._logService.log("AppInitService -- shows loaded");
          this._logService.log(this._followService);
          resolve(true);
        },
        error => {
          this._logService.error(error);
          reject(false);
        }
      );
    });
  }
}
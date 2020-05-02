import { Injectable } from '@angular/core';

import { PersistenceService } from "@services/persistence/persistence.service";

@Injectable({
  providedIn: 'root'
})
export class FollowService extends PersistenceService {

  showIds: number[] = [];

  save(): Promise<boolean> {
    this._logService.log("FollowService -- saving");
    return this.saveData(this.toJSON());
  }

  load(): Promise<boolean> {
    this._logService.log("FollowService -- loading");
    return new Promise((resolve, reject) => {
      this.loadData().then(
        (data) => {
          if(data) {
            this.showIds = data.showIds;
          } else {
            this.showIds = [];
          }
          resolve(true);
        },
        (error) => {
          this.showIds = [];
          resolve(false);
        }
      );
    });
  }

  following(id: number) {
    return this.showIds.includes(id);
  }

  follow(id: number): Promise<boolean> {
    this._logService.log(`FollowService -- follow ${id}`);
    if(!this.showIds.includes(id)) {
      this.showIds.push(id);
    }
    this._logService.log(this.showIds);
    return this.save();
  }

  unfollow(id: number): Promise<boolean> {
    this._logService.log(`FollowService -- unfollow ${id}`);
    if(this.showIds.includes(id)) {
      this.showIds.splice(this.showIds.indexOf(id), 1);
    }
    this._logService.log(this.showIds);
    return this.save();
  }

  private toJSON(): string {
    return JSON.stringify({showIds: this.showIds});
  }
}

import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FollowChangedService {
  private _changed = new Subject();
  changed$ = this._changed.asObservable();

  constructor() { }

  changed() {
    this._changed.next();
  }
}

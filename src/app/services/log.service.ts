import { Injectable } from "@angular/core";

import { EnvService } from "@services/env.service";

@Injectable({
  providedIn: "root"
})
export class LogService {
  constructor(
    private _envService: EnvService,
  ) { }  

  log(message: any) {
    if(this._envService.debug) {
      console.log(message);
    }
  }

  error(message: any) {
    console.error(message);
  }
}

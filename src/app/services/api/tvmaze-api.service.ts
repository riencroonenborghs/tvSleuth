import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { LogService } from "@services/log.service";
import { Show } from "@models/show";

@Injectable({
  providedIn: 'root'
})
export class TvmazeApiService {

  private _baseUrl = "http://api.tvmaze.com/";

  constructor(
    protected _logService: LogService,
    protected _httpClient: HttpClient,
  ) { }

  protected _buildUrl(path: string) {
    return `${this._baseUrl}${path}`;
  }
}
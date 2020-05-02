import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TvmazeApiService } from "@services/api/tvmaze-api.service";
import { Episode } from "@models/episode";

@Injectable({
  providedIn: 'root'
})
export class TvmazeEpisodeApiService extends TvmazeApiService {
  getById(id: number): Observable<Episode> {
    this._logService.log(`TvmazeEpisodeApiService - getById '${id}'`);

    return this._httpClient.get<Episode>(
      this._buildUrl(`episodes/${id}`)
    )
    .pipe(
      map(
        (data) => {
          this._logService.log(`TvmazeEpisodeApiService - getById data`);
          this._logService.log(data);

          return Object.assign(
            new Episode(), data
          );
        }
      )
    );
  }

  async asyncGetById(id: number) {
    this._logService.log(`TvmazeEpisodeApiService - getById '${id}'`);

    return await this._httpClient.get<Episode>(
      this._buildUrl(`episodes/${id}`)
    )
    .pipe(
      map(
        (data) => {
          this._logService.log(`TvmazeEpisodeApiService - getById data`);
          this._logService.log(data);

          return Object.assign(
            new Episode(), data
          );
        }
      )
    ).toPromise();
  }
}

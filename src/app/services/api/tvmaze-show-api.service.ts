import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TvmazeApiService } from "@services/api/tvmaze-api.service";
import { SearchShowResult } from "@models/search-show-result";
import { Show } from "@models/show";

@Injectable({
  providedIn: 'root'
})
export class TvmazeShowApiService extends TvmazeApiService {
  search(query: string): Observable<SearchShowResult[]> {
    this._logService.log(`TvmazeShowApiService - searching for '${query}'`);

    return this._httpClient.get<SearchShowResult[]>(
      this._buildUrl(`search/shows?q=${query}`)
    )
    .pipe(
      map(
        (records) => {
          this._logService.log(`TvmazeShowApiService - found ${records.length} records`);
          this._logService.log(records);

          return records.map(
            (record) => {
              return Object.assign(
                new SearchShowResult(), record
              );
            }
          )
        }
      )
    );
  }

  getById(id: number): Observable<Show> {
    this._logService.log(`TvmazeShowApiService - getById '${id}'`);

    return this._httpClient.get<Show>(
      this._buildUrl(`shows/${id}`)
    )
    .pipe(
      map(
        (data) => {
          this._logService.log(`TvmazeShowApiService - getById data`);
          this._logService.log(data);

          return Object.assign(
            new Show(), data
          );
        }
      )
    );
  }

  async asyncGetById(id: number) {
    this._logService.log(`TvmazeShowApiService - getById '${id}'`);

    return await this._httpClient.get<Show>(
      this._buildUrl(`shows/${id}`)
    )
    .pipe(
      map(
        (data) => {
          this._logService.log(`TvmazeShowApiService - getById data`);
          this._logService.log(data);

          return Object.assign(
            new Show(), data
          );
        }
      )
    ).toPromise();
  }
}

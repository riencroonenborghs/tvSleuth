import { Injectable } from '@angular/core';

import { FollowService } from "@services/persistence/follow.service";
import { TvmazeShowApiService } from "@services/api/tvmaze-show-api.service";
import { TvmazeEpisodeApiService } from "@services/api/tvmaze-episode-api.service";

import { Show } from "@models/show";
import { Episode } from "@models/episode";

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private _shows: Show[] = [];
  private _maxDaysToGo = 100;

  constructor(
    private _followService: FollowService,
    private _tvmazeShowApiService: TvmazeShowApiService,
    private _tvmazeEpisodeApiService: TvmazeEpisodeApiService
  ) {}

  async load() {
    await this._loadShows();
    let daysToGo = this._minDaysToWait();
    if(daysToGo == this._maxDaysToGo) { return null; }
    else { return daysToGo; }
  }

  private async _loadShows() {
    this._shows = [];
    // forEach is async, so we use good ol' fashioned for loop
    for(let i = 0; i < this._followService.showIds.length; ++i) {
      const showId = this._followService.showIds[i];
      let show: Show;
      await this._loadShow(showId).then((_show: Show) => {
        show = _show;
        this._shows.push(show);
      });
      await this._loadEpisode(show, "nextEpisode").then(() => {});
    }
  }

  private async _loadShow(showId: number) {
    let show: Show;
    await this._tvmazeShowApiService.asyncGetById(showId).then((_show: Show) => {
      show = _show;
    })
    return show;
  }

  private async _loadEpisode(show: Show, field: string) {
    if(show[field] && show[field]["id"]) {
      await this._tvmazeEpisodeApiService.asyncGetById(show[field]["id"]).then((_episode: Episode) => {
        show[field] = _episode;
      });
    }
  }

  private _minDaysToWait() {
    let daysToGo = this._maxDaysToGo;
    this._shows.forEach((show: Show) => {
      if(show.nextEpisode) {
        if(show.nextEpisode.daysToGo < daysToGo) {
          daysToGo = show.nextEpisode.daysToGo;
        }
      }
    });
    return daysToGo;
  }
}

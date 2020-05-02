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
  private _airingEpisodes = [];

  constructor(
    private _followService: FollowService,
    private _tvmazeShowApiService: TvmazeShowApiService,
    private _tvmazeEpisodeApiService: TvmazeEpisodeApiService
  ) {}

  async load() {
    await this._loadShows();
    this._showsAiringEpisodes();
    const title = this._airingEpisodes.map((hash) => {
      return `${hash.name} airs ${hash.when}`
    }).join(", ");
    return {total: this._airingEpisodes.length, title: title};
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

  private _showsAiringEpisodes() {
    this._airingEpisodes = [];
    this._shows.forEach((show: Show) => {
      if(show.nextEpisode) {
        this._airingEpisodes.push({
          name: show.name,
          when: this._daysToHuman(show.nextEpisode.daysToGo)
        });
      }
    });
  }

  private _daysToHuman(daysToGo: number) {
    switch(daysToGo) {
      case 0: {
        return "today";
        break;
      }
      case 1: {
        return "tomorrow"
        break;
      }
      case 2: {
        return "day after tomorrow"
        break;
      }
      default: {
        return `in ${daysToGo} days`;
        break;
      }
    }
  }
}

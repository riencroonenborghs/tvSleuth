import { Component, OnInit, OnDestroy } from '@angular/core';
// import { NgxMasonryComponent } from 'ngx-masonry';

import { FollowService } from "@services/persistence/follow.service";
import { TvmazeShowApiService } from "@services/api/tvmaze-show-api.service";
import { TvmazeEpisodeApiService } from "@services/api/tvmaze-episode-api.service";
import { FollowChangedService } from "@services/follow-changed.service";

import { Show } from "@models/show";
import { Episode } from "@models/episode";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {
  private _subs = [];
  private _finishedSubs = 0;
  private _followSub;

  shows: Show[] = [];
  busy: boolean = false;

  constructor(
    private _followService: FollowService,
    private _tvmazeShowApiService: TvmazeShowApiService,
    private _tvmazeEpisodeApiService: TvmazeEpisodeApiService,
    private _followChangedService: FollowChangedService
  ) {}

  ngOnInit() {
    this.busy = true;
    this._finishedSubs = 0;
    this._loadShows();
    this._followSub = this._followChangedService.changed$.subscribe(() => {
      this._loadShows();
    });
  }

  private _loadShows() {
    if(this._followService.showIds.length == 0) { this.busy = false; }
    this.shows = [];
    this._followService.showIds.forEach((showId: number) => {
      let sub = this._tvmazeShowApiService.getById(showId).subscribe((show: Show) => {
        this._finished();
        this._loadEpisode(show, "previousEpisode");
        this._loadEpisode(show, "nextEpisode");
        this.shows.push(show);
      this._sortShows();
      });
      this._subs.push(sub);
    });
  }

  private _loadEpisode(show: Show, field: string) {
    if(show[field] && show[field]["id"]) {
      let sub = this._tvmazeEpisodeApiService.getById(show[field]["id"]).subscribe((episode: Episode) => {
        this._finished();
        show[field] = episode;
      });
      this._subs.push(sub);
    }
  }

  private _finished() {
    this._finishedSubs += 1;
    this.busy = this._subs.length != this._finishedSubs;
  }

  private _sortShows() {
    this.shows = this.shows.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  ngOnDestroy() {
    this._subs.forEach((sub) => sub.unsubscribe());
    this._followSub.unsubscribe();
  }

}

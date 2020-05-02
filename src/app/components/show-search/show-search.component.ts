import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators"; 
import { MatDialog } from "@angular/material/dialog";

import { TvmazeShowApiService } from "@services/api/tvmaze-show-api.service";
import { SearchShowResult } from "@models/search-show-result";
import { LogService } from "@services/log.service";
import { FollowService } from "@services/persistence/follow.service";

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.sass']
})
export class ShowSearchComponent implements OnInit {

  private _searchSub;
  private _querySub;

  searchFormControl = new FormControl();
  shows: SearchShowResult[] = new Array<SearchShowResult>();

  constructor(
    private _dialog: MatDialog,
    private _showApi: TvmazeShowApiService,
    private _logService: LogService,
    private _followService: FollowService
  ) { }

  ngOnInit() {
    this._querySub = this.searchFormControl
      .valueChanges
      .pipe(debounceTime(500))
      .subscribe(
        query => this._search(query)
      );
  }

  ngOnDestroy() {
    this._querySub.unsubscribe();
    if(this._searchSub){ this._searchSub.unsubscribe(); }
  }

  private _search(query: any) {
    this._searchSub = this._showApi.search(query).subscribe(
      data => {
        this.shows = data;
        this.shows.forEach((result: SearchShowResult) => {
          result.show.following = this._followService.following(result.show.id);
        });
      }
    );
  }
}

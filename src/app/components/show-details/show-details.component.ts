import { Component, OnInit, Input } from '@angular/core';

import { FollowService } from "@services/persistence/follow.service";
import { SnackbarService } from "@services/snackbar.service";
import { FollowChangedService } from "@services/follow-changed.service";

import { Show } from "@models/show";


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.sass']
})
export class ShowDetailsComponent implements OnInit {

  @Input() show: Show;
  @Input() manageable: boolean = false;
  @Input() style: string = "card";

  constructor(
    private _followService: FollowService,
    private _snackbarService: SnackbarService,
    private _followChangedService: FollowChangedService
  ) { }

  ngOnInit() { }

  follow() {
    this._followService.follow(this.show.id).then(
      (result) => {
        this.show.following = true;
        this._snackbarService.showSuccess(`Following ${this.show.name}`);
        this._followChangedService.changed();
      }
    );
  }

  unfollow() {
    this._followService.unfollow(this.show.id).then(
      (result) => {
        this.show.following = false;
        this._snackbarService.showSuccess(`Unfollowing ${this.show.name}`);
        this._followChangedService.changed();
      }
    );
  }
}

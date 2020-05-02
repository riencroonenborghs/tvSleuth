import { Component, OnInit, Input } from '@angular/core';

import { Episode } from "@models/episode";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})
export class EpisodeComponent implements OnInit {

  @Input() episode: Episode;
  @Input() next: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

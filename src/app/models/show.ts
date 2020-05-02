import { Schedule } from "@models/schedule";
import { Rating } from "@models/rating";
import { Network } from "@models/network";
import { Externals } from "@models/externals";
import { Image } from "@models/image";
import { Episode } from "@models/episode";

export class Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  private _rating: Rating;
  weight: number;
  private _network: Network;
  webChannel: string;
  private _externals: Externals;
  private _image: Image;
  summary: string;
  updated: string;
  previousEpisode: Episode;
  nextEpisode: Episode;

  following: boolean = false;

  set rating(record: any) {
    this._rating = Object.assign(
      new Rating(), record
    );
  }
  get rating() { return this._rating; }

  set network(record: any) {
    this._network = Object.assign(
      new Network(), record
    );
  }

  get network() { return this._network; }

  set externals(record: any) {
    this._externals = Object.assign(
      new Externals(), record
    );
  }

  get externals() { return this._externals; }

  set image(record: any) {
    this._image = Object.assign(
      new Image(), record
    );
  }

  get image() { return this._image; }

  set _links(record: any) {
    if(record.previousepisode) {
      this.previousEpisode = Object.assign(
        new Episode(),
        {id: this._episodeId(record.previousepisode.href)}
      );
    }
    if(record.nextepisode) {
      this.nextEpisode = Object.assign(
        new Episode(),
        {id: this._episodeId(record.nextepisode.href)}
      );
    }
  }

  private _episodeId(episode: string) {
    const matches = episode.match(/episodes\/(\d+)/);
    return parseInt(matches[1]);
  }
}

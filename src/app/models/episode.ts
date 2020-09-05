import { Image } from "@models/image";
import * as dayjs from 'dayjs';

export class Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  _airdate: Date;
  airtime: string;
  runtime: number;
  private _image: Image;
  summary: string;
  daysToGo: number;

  set image(record: any) {
    this._image = Object.assign(
      new Image(), record
    );
  }

  get image() { return this._image; }

  set airdate(date: Date) {
    this._airdate = date;
    let diff = dayjs(date).valueOf() - dayjs(new Date()).startOf('day').valueOf();
    diff = diff / (24 * 60 * 60 * 1000);
    this.daysToGo = Math.floor(diff);
  }

  get airdate() { return this._airdate; }
}
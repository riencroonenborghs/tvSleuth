import { Show } from "@models/show";

export class SearchShowResult {
  score: number;
  private _show: Show;

  set show(record: any) {
    this._show = Object.assign(
      new Show(), record
    );
  }

  get show() {
    return this._show;
  }
}
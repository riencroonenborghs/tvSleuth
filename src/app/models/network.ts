import { Country } from "@models/country";

export class Network {
  id: number;
  name: string;
  private _country: Country;

  set country(record: any) {
    this._country = Object.assign(
      new Country(), record
    );
  }

  get country() { return this._country; }
}

import { Injectable } from "@angular/core";

import { HousingLocation } from "../interfaces/housing-location.interface";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/locations";

  constructor() {}

  /* getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  } */
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  /* getHousingLocationById(id: Number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  } */
  async getHousingLocationById(
    id: Number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}

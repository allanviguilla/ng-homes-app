import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HousingLocationComponent } from "../housing-location/housing-location.component";

import { HousingLocation } from "../interfaces/housing-location.interface";

import { HousingService } from "../services/housing.service";

@Component({
  standalone: true,
  selector: "app-home",
  template: `
    <section>
      <form action="">
        <input type="text" placeholder="Filter by city" /><button
          class="primary"
          type="button"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <!-- Iterate through the housingLocationList to get each of the locations -->
      <!-- Each housingLocation component is a card with that housingLocation's data -->
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
  imports: [CommonModule, HousingLocationComponent],
})
export class HomeComponent {
  //We load our housingLocationList data into our Home Component
  //so we can pass it down as an Input prop to HousingLocation child component
  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { HousingLocation } from "../interfaces/housing-location.interface";
import { HousingService } from "../services/housing.service";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>[Details Page] Housing Location ID: {{ housingLocation?.id }}</p>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocation: HousingLocation | undefined;

  housingService = inject(HousingService);

  constructor() {
    //This code is retrieving the value of the "id" path parameter from the current route's
    //snapshot and saving it to housingLocationId
    const housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}

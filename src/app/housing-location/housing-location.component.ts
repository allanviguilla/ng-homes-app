import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HousingLocation } from "../interfaces/housing-location.interface";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!-- We are property binding src to housingLocation.photo -->
      <img
        src=""
        alt="Exterior photo of {{ housingLocation.name }}"
        class="listing-photo"
        [src]="housingLocation.photo"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a routerLink="details/{{ housingLocation.id }}">Learn More</a>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  //For an Input we are expecting the value to be passed in
  //Use the non-null assertion operator to tell TS this won't be null or undefined
  @Input() housingLocation!: HousingLocation;
}

import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

import { HousingLocation } from "../interfaces/housing-location.interface";
import { HousingService } from "../services/housing.service";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img [src]="housingLocation?.photo" alt="" class="listing-photo" />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Interested in living here?</h2>
        <!-- Event Binding form submit to function -->
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="last-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />

          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email" />
          <button type="submit">Apply Today</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  housingService = inject(HousingService);

  housingLocation: HousingLocation | undefined;

  //We have a form group that represents the data we want to collect
  //When we bind this form to the template we'll be able to keep the values
  //users enter into the form in sync with the form group
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  //this.applyForm.value is how to access the values from the form group
  submitApplication() {
    this.housingService.submitApplication(
      //Nullish coalescing operator
      //If the value to the left is null
      //use value to the right
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }

  constructor() {
    //This code is retrieving the value of the "id" path parameter from the current route's
    //snapshot and saving it to housingLocationId
    const housingLocationId = Number(this.route.snapshot.params["id"]);
    // this.housingLocation =
    //   this.housingService.getHousingLocationById(housingLocationId);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
      });
  }
}

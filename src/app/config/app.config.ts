import { ApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { Routes } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

import {
  PreloadAllModules,
  RouterFeatures,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
} from "@angular/router";

import { HomeComponent } from "../home/home.component";
import { DetailsComponent } from "../details/details.component";

const routeConfig: Routes = [
  //{path: '', component: , title: ''},
  { path: "", component: HomeComponent, title: "Home Page" },
  //Paramterized route
  { path: "details/:id", component: DetailsComponent, title: "Details Page" },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeConfig),
    provideHttpClient(),
    provideClientHydration(),
  ],
};

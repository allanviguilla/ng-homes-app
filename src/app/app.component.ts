import { Component } from "@angular/core";

import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <nav>
      <a routerLink="/home"></a>
    </nav>
    <main>
      <header class="brand-name">
        <a routerLink="">
          <img
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
            class="brand-logo"
          />
        </a>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {}

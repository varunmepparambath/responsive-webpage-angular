import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-white home__nav">
      <div class="container-fluid m-0 p-0">
        <a class="me-3" href="#" >
          <img
            src="/assets/header/logo.png"
            alt=""
            class="d-inline-block align-top brand__img"
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarNav" >
          <ul class="navbar-nav" >
            <li class="nav-item me-3">
              <a class="nav-link black__text"  routerLink="/scaffold"
                >Explore</a
              >
            </li>
            <li class="nav-item me-3">
              
            <!-- active" aria-current="page" -->
              <a class="nav-link black__text" routerLink="/">Learn</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link black__text" routerLink="/scaffold">Archive</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link black__text" routerLink="/scaffold">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

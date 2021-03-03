import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-white "style="padding-top:37px;padding-bottom:41px;padding-left:100px">
      <div class="container-fluid ">
        <a class="navbar-brand " href="#" style="padding-right:63px;">
          <img
            src="/assets/header/logo.png"
            alt=""
            width="150"
            height="24"
            class="d-inline-block align-top"
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarNav" >
          <ul class="navbar-nav" >
            <li class="nav-item">
              <a class="nav-link black__text"  routerLink="/scaffold"
                >Explore</a
              >
            </li>
            <li class="nav-item">
              
            <!-- active" aria-current="page" -->
              <a class="nav-link black__text" routerLink="/">Learn</a>
            </li>
            <li class="nav-item">
              <a class="nav-link black__text" routerLink="/scaffold">Archive</a>
            </li>
            <li class="nav-item">
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

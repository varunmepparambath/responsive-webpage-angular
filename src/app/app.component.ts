import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <!-- header -->
   <app-header></app-header>
  <!-- Routes get injected here -->
  <router-outlet></router-outlet> 
  <!-- <app-home></app-home> -->
  <!-- footer -->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}

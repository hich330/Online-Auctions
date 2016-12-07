import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  "<header-cpt></header-cpt>" +
  "<router-outlet></router-outlet>" +
  "<footer-cpt></footer-cpt>"
})
export class AppComponent {}

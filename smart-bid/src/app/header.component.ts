import { Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/filter';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'header-cpt',
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {

  public path :any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
        this.path = currentRoute.snapshot.data;
      })
  }
}

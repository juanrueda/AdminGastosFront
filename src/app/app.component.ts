import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adminstrador de gastos';
  showNav = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    router.events.forEach((event => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login' || event.url === '/') {
          this.showNav = false;
        } else {
          this.showNav = true;
        }
      }
    }));

  }

}


import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lucypoulton-dot-net';
  constructor(router: Router) {
    router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) setTimeout(() => document.body.classList.remove("hidden"), 0)
    })
  }
}

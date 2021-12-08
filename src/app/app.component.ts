import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { ThemeService } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lucypoulton-dot-net';
  constructor(router: Router, themeService: ThemeService) {
    document.body.classList.add('bg-light');
    themeService.themeSet.subscribe(x => {
      let [one, two] = x ? ["light", "dark"] : ["dark", "light"];
      document.body.classList.replace(`bg-${one}`, `bg-${two}`)
    });

    themeService.trigger();

    router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) setTimeout(() => document.body.classList.remove("hidden"), 20)
    })
  }
}

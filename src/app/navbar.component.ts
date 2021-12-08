import {Component, Input} from "@angular/core";
import { ThemeService } from "./theme";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title!: string;

  constructor(private themeService: ThemeService) { }

  ngInit() {

  }

  toggle() {
    this.themeService.toggle();
  }
}

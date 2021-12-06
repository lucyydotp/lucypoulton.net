import {Component, Input} from "@angular/core";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title!: string;

  toggle() {
    const classes = document.body.classList;
    if (classes.contains("bg-dark")) {
      classes.add("bg-light");
      classes.remove("bg-dark");
    } else {
      classes.add("bg-dark");
      classes.remove("bg-light");
    }
  }
}

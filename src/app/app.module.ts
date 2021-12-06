import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar.component";
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { ProjectComponent } from './project/project.component';
import {DelayDeactivateGuard} from "./delay";
import {ProjectProvider} from "./project";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DelayDeactivateGuard, ProjectProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    document.body.classList.add('bg-light');
  }
}

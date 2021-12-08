import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar.component";
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { ProjectComponent } from './project/project.component';
import {DelayDeactivateGuard} from "./delay";
import { ThemeService } from './theme';
import { CookieModule, CookieService } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [DelayDeactivateGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

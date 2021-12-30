import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar.component";
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { ProjectComponent } from './project/project.component';
import {DelayDeactivateGuard} from "./delay";
import { CookieModule, CookieService } from 'ngx-cookie';
import { PncComponent } from './pnc/pnc.component';
import { FormsModule } from '@angular/forms';
import { PronounSetValidatorDirective } from './pnc/setValidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProjectComponent,
    PncComponent,
    PronounSetValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [DelayDeactivateGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

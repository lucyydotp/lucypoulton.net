import {NgModule} from '@angular/core';
import {IndexComponent} from "./index/index.component";
import {RouterModule, Routes} from "@angular/router";
import {ProjectComponent} from "./project/project.component";
import {DelayDeactivateGuard} from "./delay";
import { PncComponent } from './pnc/pnc.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'pnc', component: PncComponent},
  
  // keep this one at the bottom
  {path: ':project', component: ProjectComponent}
]

routes.forEach(rte => rte.canDeactivate = [DelayDeactivateGuard])

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

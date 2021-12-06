import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Component} from "@angular/core";

export class DelayDeactivateGuard implements CanDeactivate<Component> {
  canDeactivate(component: Component,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Promise<boolean> {
    document.body.classList.add("hidden");
    return new Promise(resolve => {setTimeout(resolve, 300)}).then(() => true);

  }
}

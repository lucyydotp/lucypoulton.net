import { Injectable, Output, EventEmitter } from "@angular/core";
import { CookieService } from "ngx-cookie";

@Injectable({providedIn: "root"})
export class ThemeService {

    @Output() themeSet = new EventEmitter<boolean>();
    private isDark;

    constructor(private cookie: CookieService) {
        this.isDark = cookie.get("theme") == "dark";
    }

    trigger() {
        this.themeSet.emit(this.isDark);
    }

    private setCookie(value: string) {
        this.cookie.put("theme", value, {expires: new Date(2082758400000)})
    }

    setDark() {
        this.setCookie("dark");
        this.isDark = true;
        this.trigger();
    }

    setLight() {
        this.setCookie("light");
        this.isDark = false;
        this.trigger();
    }

    toggle() {
        console.log("Toggling theme")
        this.isDark ? this.setLight() : this.setDark();
    }
}
import {Component} from '@angular/core';
import {NavbarEnum} from "../../models/enums/navbar.enum";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {NavbarItemInterface} from "../../models/interface/navbar-item.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent{

  constructor(
    private readonly router: Router,
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        if (route.url.includes('/feed'))
          this.currentNavbar = NavbarEnum.FEED;
        if (route.url.includes('/home'))
          this.currentNavbar = NavbarEnum.HOME;
        if (route.url.includes('/profile'))
          this.currentNavbar = NavbarEnum.PROFILE;

        console.log(this.currentNavbar);
      });
  }

  public currentNavbar: NavbarEnum = NavbarEnum.HOME;

  public navbarList: NavbarItemInterface[] = [
    {
      type: NavbarEnum.FEED,
      link: '/feed',
      icon: "assets/images/calendar-off.svg",
      iconActivated: "assets/images/calendar-on.svg",
    },
    {
      type: NavbarEnum.HOME,
      link: '/home',
      icon: "assets/images/home-off.svg",
      iconActivated: "assets/images/home-on.svg",
    },
    {
      type: NavbarEnum.PROFILE,
      link: '/profile',
      icon: "assets/images/user-off.svg",
      iconActivated: "assets/images/user-on.svg",
    }
  ]
}

import {Component, OnInit} from '@angular/core';
import {NavbarEnum} from "../../models/enums/navbar.enum";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

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


  public navBarEnum: typeof NavbarEnum = NavbarEnum;
  public currentNavbar: NavbarEnum = NavbarEnum.HOME;

  ngOnInit() {

  }
}

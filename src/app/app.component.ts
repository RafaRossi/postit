import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from 'rxjs/operators';
import {Subscription} from "rxjs";
import {OnDestroy} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy{
  constructor(private readonly router: Router,) {
    console.log(router);
    this.routeSubscription = router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
      console.log(route.url);

    this.canShowNavbar = !this.routesWithoutNavbar.includes(route.url);
    });
  }

  public canShowNavbar : boolean = true;
  public routesWithoutNavbar: string[] = ['/login'];

  public routeSubscription : Subscription;

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}

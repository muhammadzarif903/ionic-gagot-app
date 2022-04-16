import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private routeLinks = [];

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }


  public setRouteLinks(routeLinks) {
    this.routeLinks = routeLinks;
  }

  public navigate(url) {
    if (url) {
      this.router.navigate([url]);
    }
  }

  public back(rootRoute) {
    const route = this.activateRoute();
    this.navigate(`${rootRoute}/${route?.path}`);
  }

  public getActiveRoute(): number {
    return this.routeLinks.findIndex((el) => el.active) || 0;
  }

  public activateRoute(next?: boolean) {
    let index = this.getActiveRoute();
    index += next ? 1 : -1;
    index = index < 0 ? undefined : index;
    this.routeLinks.forEach(el => el.active = false);
    if (index <= this.routeLinks.length) {
      this.routeLinks[index].active = true;
    }
    return this.routeLinks[index];
  }
}

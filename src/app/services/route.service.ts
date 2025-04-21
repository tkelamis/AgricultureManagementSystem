import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  urlHasJob():boolean{
    return this.router.url.includes('jobs');
  }

  urlHasProfitEstimate():boolean{
    return this.router.url.includes('profitEstimate');
  }
  
  urlHasMain():boolean{
    return this.router.url.includes('main');
  }

  showRouterState(){
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
    })
  }

  routeObservable(){
    console.log(this.activatedRoute.url);
  }
}



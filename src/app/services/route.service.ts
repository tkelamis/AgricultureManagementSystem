import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router:Router) { }

  urlHasJob():boolean{
    return this.router.url.includes('jobs');
  }
  
  urlHasMain():boolean{
    return this.router.url.includes('main');
  }
}



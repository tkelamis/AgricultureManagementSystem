import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  urlHasJobs():boolean{
    return this.router.url.includes('jobs');
  }

  urlHasFinancial():boolean{
    return this.router.url.includes('financial');
  }
  
  urlHasMain():boolean{
    return this.router.url.includes('main')|| this.router.url.includes('practice');;
  }

  showRouterState(){
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
    })
  }

  routeObservable(){
    console.log(this.activatedRoute.url);
  }

  navigateTo(path: string){
    this.router.navigate([`/${path}`]);
  }

  navigateToWithFragment(path: string){
    this.router.navigate([`/${path}`], { fragment: 'reviews' });
  }

  loading(){
    this.router.events.subscribe((event) =>{
      if(event instanceof NavigationStart){
        console.log('The navigation started here: ', event.id);
      }

      else if(event instanceof NavigationEnd){
        console.log('The navigation ended here: ', event.id);
        
      }
      else{
      }
    })
  }

  navigationError(){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationError)
      {console.log('Navigation is wrong')}
    })
  }
}
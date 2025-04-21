import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../shared/animations';
import { slideInLeft } from '../../shared/slideFromLeft';
import { slideInRight } from '../../shared/slideFromRight';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  animations: [fadeIn, slideInLeft, slideInRight]
})
export class AppComponent implements OnInit {
  
  title = 'AgricultureManagementSystem';

  userNameSignedIn?: string;
  navigateTo: string = '';
  


  constructor(private routerManager: RouteService, private router:Router){}

  ngOnInit(): void {
    this.signInUser();
  }

  signInUser(){
    this.userNameSignedIn = 'Kelamis'
  }

  urlHasJob():boolean{
    return this.routerManager.urlHasJob();
  }

  urlHasProfitEstimate():boolean{
    return this.routerManager.urlHasProfitEstimate();
  }

  urlHasMain():boolean{
    return this.routerManager.urlHasMain();
  }

  logRoute() {
    console.log('Navigating to:', this.router.url);
  }

  navigateToProfit(){
    this.routerManager.navigateToProfit();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeIn } from '../../shared/animations';
import { slideInLeft } from '../../shared/slideFromLeft';
import { slideInRight } from '../../shared/slideFromRight';
import { RouteService } from '../../services/route.service';

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
  


  constructor(private routerManager: RouteService){}

  ngOnInit(): void {
    this.signInUser();
  }

  signInUser(){
    this.userNameSignedIn = 'Kelamis'
  }

  urlHasJob():boolean{
    return this.routerManager.urlHasJob();
  }

  urlHasMain():boolean{
    return this.routerManager.urlHasMain();
  }

}

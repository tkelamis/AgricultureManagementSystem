import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../shared/animations/fadeIn';
import { slideInLeft } from '../../shared/animations/slideFromLeft';
import { slideInRight } from '../../shared/animations/slideFromRight';
import { RouteService } from '../../core/services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  standalone: false,
  styleUrl: './main.component.css',
  animations: [fadeIn, slideInLeft, slideInRight]
})
export class MainComponent implements OnInit {
  
  title = 'AgricultureManagementSystem';

  navigateTo: string = '';
  loading = false;
  
  


  constructor(private routerManager: RouteService, private router:Router){}

  ngOnInit(): void {
  }

  

  logRoute() {
    console.log('Navigating to:', this.router.url);
  }
}

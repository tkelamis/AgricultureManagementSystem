import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeIn } from '../../shared/animations';
import { slideInLeft } from '../../shared/slideFromLeft';
import { slideInRight } from '../../shared/slideFromRight';

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
  jobsMenuOpen = false;
  


  constructor(private router: Router){}

  ngOnInit(): void {
    this.signInUser();
  }

  signInUser(){
    this.userNameSignedIn = 'Kelamis'
  }

  backFromJobsMenu() {
    this.jobsMenuOpen = false;
  
    // setTimeout(() => {
    //   this.router.navigate(['']);
    // }, 300);
  }
}

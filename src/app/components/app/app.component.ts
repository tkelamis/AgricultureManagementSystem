import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
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
  
    setTimeout(() => {
      this.router.navigate(['']);
    }, 300);
  }
}

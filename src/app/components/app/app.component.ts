import { Component, OnInit } from '@angular/core';

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
  


  constructor(){}

  ngOnInit(): void {
    this.signInUser();
  }

  signInUser(){
    this.userNameSignedIn = 'Kelamis'
  }

  backFromJobsMenu(){
    this.jobsMenuOpen= !this.jobsMenuOpen;
    
  }

  //ng Class example
 
  
}

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
  


  constructor(){}

  ngOnInit(): void {
    this.signInUser();
    this.setWelcomeMessage();
    this.setCurrentClasses();
  }

  signInUser(){
    this.userNameSignedIn = 'Kelamis'
  }


  //ng Class example
  welcomeMessage = '';
  userSignedIn: boolean = true;
  isAdmin: boolean = true;
  isFirstVisit: boolean = true;
  currentClasses: Record<string, boolean> = {};

  setWelcomeMessage() {
    if (this.isAdmin) {
      this.welcomeMessage = 'You have administrative privileges.';
    } else if (this.isFirstVisit) {
      this.welcomeMessage = 'Thank you for joining us for the first time!';
    } else {
      this.welcomeMessage = 'We are glad to have you back.';
    }
  }

  setCurrentClasses(){
    this.currentClasses = {
    'admin-style': this.isAdmin,
    'first-visit-style': this.isFirstVisit,
    'returning-user-style': !this.isFirstVisit && !this.isAdmin
    }
  }
  
}

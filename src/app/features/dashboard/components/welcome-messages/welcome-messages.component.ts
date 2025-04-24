import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { fadeIn } from '../../../../shared/animations/fadeIn';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-messages',
  standalone: false,
  templateUrl: './welcome-messages.component.html',
  styleUrl: './welcome-messages.component.css',
  animations: [fadeIn]
})
export class WelcomeMessagesComponent implements OnInit {
  welcomeMessage = '';
  userSignedIn?: string;
  
  currentClasses: Record<string, boolean> = {};

  constructor(private userManager: UserService){
    this.userSignedIn = userManager.userName;
  }

  ngOnInit(){
    this.setWelcomeMessage();
    this.setCurrentClasses();
  }

  setWelcomeMessage() {
    if (this.userManager.isAdmin) {
      this.welcomeMessage = 'You have administrative privileges.';
    } else if (this.userManager.isFirstVisit) {
      this.welcomeMessage = 'Thank you for joining us for the first time!';
    } else {
      this.welcomeMessage = 'We are glad to have you back.';
    }
  }

  setCurrentClasses(){
    this.currentClasses = {
    'admin-style': this.userManager.isAdmin,
    'first-visit-style': this.userManager.isFirstVisit,
    'returning-user-style': !this.userManager.isFirstVisit && !this.userManager.isAdmin
    }
  }
}

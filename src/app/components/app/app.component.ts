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
  }

  signInUser(){
    this.userNameSignedIn = 'Kelamis'
  }


  //ng Class example
 
  
}

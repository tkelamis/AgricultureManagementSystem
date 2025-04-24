import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName?: string;
  userSignedIn: boolean = true;
  isAdmin: boolean = true;
  isFirstVisit: boolean = true;

  constructor() { 
    this.userName = '';
  }
}

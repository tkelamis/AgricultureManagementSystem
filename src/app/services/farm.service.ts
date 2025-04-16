import { DueDate, Farm } from './../objects/farm';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  farms:Farm[] = [];

  constructor() { 
    this.farms = [
      {name:"Καρατζάς", readyForCropping: DueDate.InTime},
      {name: "Ραλλύ Κατσίκας", readyForCropping: DueDate.Early}
    ]
  }



}

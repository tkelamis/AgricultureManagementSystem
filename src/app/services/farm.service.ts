import { BehaviorSubject } from 'rxjs';
import { DueDate, Farm } from './../objects/farm';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  farms:Farm[] = [];

  farmsObsForPractice: BehaviorSubject<Farm[]> = new BehaviorSubject<Farm[]>(
    [
      {name: 'χτήμα 1', sizeInStremmata: 5, periodOfCropping:DueDate.Early},
      {name: 'χτήμα 2', sizeInStremmata: 4, periodOfCropping:DueDate.Early},
      {name: 'χτήμα 3', sizeInStremmata: 3, periodOfCropping:DueDate.Early}
    ]
  )

  constructor() { 
    this.farms = [
      {name:"Καρατζάς", sizeInStremmata: 3,periodOfCropping:DueDate.Early},
      {name: "Ραλλύ Κατσίκας", sizeInStremmata: 3, periodOfCropping:DueDate.Early}
    ]
  }

  get farmsObs$(){
    return this.farmsObsForPractice.asObservable();
  }



}

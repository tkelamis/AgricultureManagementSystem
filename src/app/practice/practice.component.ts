import { Component, OnInit } from '@angular/core';
import { FarmService } from '../services/farm.service';
import { BehaviorSubject } from 'rxjs';
import { DueDate, Farm } from '../objects/farm';

@Component({
  selector: 'app-practice',
  standalone: false,
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent{
  
  //example of Loading data with async pipe
  // newFarms:BehaviorSubject<Farm[]|null> = new BehaviorSubject<Farm[]| null>(null);
    

  // ngOnInit(){

  //   setTimeout(()=>{
  //     this.newFarms.next([
  //       { name: 'Νέο Χτήμα', sizeInStremmata: 10, periodOfCropping:DueDate.Early },
  //       { name: 'Παλιά Φάρμα', sizeInStremmata: 8, periodOfCropping:DueDate.Early }
  //     ]);
  //   },4000);

  //   setTimeout(()=>{
  //   this.newFarms.next([
  //     { name: 'asdas', sizeInStremmata: 10, periodOfCropping:DueDate.Early },
  //     { name: 'fgsdgsd', sizeInStremmata: 8, periodOfCropping:DueDate.Early }
  //   ]);
  //   },8000);
  // }

  // currency pipe example
  // a: number = 0.259;
  // b: number = 1.3495;




  
}

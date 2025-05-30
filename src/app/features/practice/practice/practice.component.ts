import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DueDate, Farm } from '../../../core/models/farm';
import { RouteService } from '../../../core/services/route.service';

@Component({
  selector: 'app-practice',
  standalone: false,
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent{

  constructor(private routerManager: RouteService){}



            //EXAMPLE of Loading data with async pipe
  newFarms:BehaviorSubject<Farm[]|null> = new BehaviorSubject<Farm[]| null>(null);
    


  ngOnInit(){

    setTimeout(()=>{
      this.newFarms.next([
        { name: 'Νέο Χτήμα', sizeInStremmata: 10, periodOfCropping:DueDate.Early },
        { name: 'Παλιά Φάρμα', sizeInStremmata: 8, periodOfCropping:DueDate.Early }
      ]);
    },1000);

    setTimeout(()=>{
    this.newFarms.next([
      { name: 'asdas', sizeInStremmata: 10, periodOfCropping:DueDate.Early },
      { name: 'fgsdgsd', sizeInStremmata: 8, periodOfCropping:DueDate.Early }
    ]);
    },1000);
  }

            // EXAMPLE currency pipe
  // a: number = 0.259;
  // b: number = 1.3495;


            // EXAMPLE i18nPlural
  // messages:string[] = [
  //   "hello"
  // ];
  // messageMapping: { [count: string]: string; } = {
  //   '=0': 'No messages',
  //   '=1': 'message',
  //   'other': 'messages'
  // }

          //EXAMPLE i18nSelect
  // gender = 'male';

  // inviteMap = { 'male': 'fuck off', 'female': 'invite her', 'other': 'invite them' };

  
          //EXAMPLE KeyValuePipe
  //farm: Farm = { name: 'karantza', periodOfCropping: DueDate.InTime, sizeInStremmata: 4 };
 
  
}

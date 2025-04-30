import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-practice-child',
  standalone: false,
  templateUrl: './practice-child.component.html',
  styleUrl: './practice-child.component.css'
})
export class PracticeChildComponent implements OnInit {
  practiceObservable = new Observable<string>(observableEmitter  =>{
    observableEmitter.next('Hello');
    observableEmitter.next('World');
    
    }
  )

  

  ngOnInit() {

    const subscription = this.practiceObservable.subscribe(value =>{
      if (typeof value === 'string'){
        console.log('The value is right and it is ',value);
      }
      else{
        console.log('The value is of the wrong type');
      }
    })
  
  }

    
}

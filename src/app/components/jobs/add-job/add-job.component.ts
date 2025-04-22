import { Component } from '@angular/core';

@Component({
  selector: 'app-add-job',
  standalone: false,
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {
  jobs:string[] = []

  ngAfterViewInit() {
  }


  addJob(){
    const newJob = 'irrigation';
    this.jobs.push(newJob);
    console.log(this.jobs.forEach(element => {
      console.log(element);
    }))
  }
}

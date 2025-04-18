import { Component } from '@angular/core';
import { Job, JobType } from '../../objects/job';
import { JobsService } from '../../services/jobs.service';
import { fadeIn } from '../../shared/animations';

@Component({
  selector: 'app-jobs',
  standalone: false,
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
  animations: [fadeIn]
})
export class JobsComponent {
  jobs?: Partial<Job>[];
  selectedJob?: Partial<Job>;
  jobType = JobType;
  openIrrigiation = true;

  constructor(private jobManager:JobsService){
    this.jobs = jobManager.jobs
  }

  getJobType(job: Partial<Job>){
    this.selectedJob = job;
  }
}

import { Component } from '@angular/core';
import { Job, JobType } from '../../objects/job';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs',
  standalone: false,
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs?: Partial<Job>[];
  selectedJob?: Partial<Job>;
  jobType = JobType;

  constructor(private jobManager:JobsService){
    this.jobs = jobManager.jobs
  }

  getJobType(job: Partial<Job>){
    this.selectedJob = job;
  }
}

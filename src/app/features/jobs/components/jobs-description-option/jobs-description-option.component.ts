import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../../core/services/route.service';
import { JobsService } from '../../../../core/services/jobs.service';
import { Job, JobType } from '../../../../core/models/job';
import { fadeIn } from '../../../../shared/animations/fadeIn';

@Component({
  selector: 'app-jobs-description-option',
  standalone: false,
  templateUrl: './jobs-description-option.component.html',
  styleUrl: './jobs-description-option.component.css',
  animations: [fadeIn]
})
export class JobsDescriptionOptionComponent implements OnInit  {
  jobs?: Partial<Job>[];
  selectedJob?: Partial<Job>;
  jobType = JobType;
  openIrrigiation = true;

  constructor(private jobManager:JobsService, private routeManager: RouteService){
    this.jobs = jobManager.jobs
  }

  ngOnInit(){
    this.routeManager.showRouterState;
  }

  getJobType(job: Partial<Job>){
    this.selectedJob = job;
  }
}

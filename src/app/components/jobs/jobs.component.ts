import { Component, OnInit } from '@angular/core';
import { Job, JobType } from '../../objects/job';
import { JobsService } from '../../services/jobs.service';
import { fadeIn } from '../../shared/animations';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-jobs',
  standalone: false,
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
  animations: [fadeIn]
})
export class JobsComponent implements OnInit {

  constructor(private routeManager: RouteService){}

  ngOnInit(): void {
    this.routeManager.routeObservable();
  }
}

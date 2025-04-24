import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../../core/services/route.service';
import { fadeIn } from '../../../../shared/animations/fadeIn';


@Component({
  selector: 'app-jobs',
  standalone: false,
  templateUrl: './jobs-main.component.html',
  styleUrl: './jobs-main.component.css',
  animations: [fadeIn]
})
export class JobsMainComponent implements OnInit {

  constructor(private routeManager: RouteService){}

  ngOnInit(): void {
  }
}

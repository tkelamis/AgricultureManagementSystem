import { Component, OnInit } from '@angular/core';
import { Farm } from '../../../core/models/farm';
import { fadeIn } from '../../../shared/animations/fadeIn';
import { RouteService } from '../../../core/services/route.service';
import { FarmService } from '../../../core/services/farm.service';

@Component({
  selector: 'app-profit-estimate',
  standalone: false,
  templateUrl: './profit-estimate.component.html',
  styleUrl: './profit-estimate.component.css',
  animations: [fadeIn]
})
export class ProfitEstimateComponent implements OnInit {
  farm?: Farm;
  farms: Farm[] = [];
  showEarly = false;
  showLate = false;

  constructor(private farmManager:FarmService, private routeManager: RouteService){
    this.farms = this.farmManager.farms;
  }

  ngOnInit() {
    this.routeManager.showRouterState();
  }



}

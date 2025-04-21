import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../services/route.service';

@Component({
  selector: 'app-profit-estimate-main',
  standalone: false,
  templateUrl: './profit-estimate-main.component.html',
  styleUrl: './profit-estimate-main.component.css'
})
export class ProfitEstimateMainComponent implements OnInit {

  constructor(private routerManager: RouteService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    //this.routerManager.showRouterState();

    this.activatedRoute.data.subscribe(data => {
      console.log(data);
    })
  }

}

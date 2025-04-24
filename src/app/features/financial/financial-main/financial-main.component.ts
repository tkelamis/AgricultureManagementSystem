import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../core/services/route.service';

@Component({
  selector: 'app-profit-estimate-main',
  standalone: false,
  templateUrl: './financial-main.component.html',
  styleUrl: './financial-main.component.css'
})
export class FinancialMainComponent implements OnInit {

  constructor(private routerManager: RouteService, private activatedRoute: ActivatedRoute, private route:Router){}

  ngOnInit(){

    // this.activatedRoute.url.subscribe(url => {
    //   console.log(url)
    // })

    // this.activatedRoute.fragment.subscribe(fragment => {
    // console.log('Fragment is ', fragment);
    // })

}

navigateToProfit(){
  this.routerManager.navigateToWithFragment('profitEstimate');
}

}

import { fadeIn } from '../../shared/animations';
import { slideInLeft } from '../../shared/slideFromLeft';
import { slideInRight } from '../../shared/slideFromRight';
import { RouteService } from './../../services/route.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-left-menu-options',
  standalone: false,
  templateUrl: './left-menu-options.component.html',
  styleUrl: './left-menu-options.component.css',
    animations: [fadeIn, slideInLeft, slideInRight]
})
export class LeftMenuOptionsComponent {

  constructor(private routerManager: RouteService){}
  
  urlHasJob():boolean{
    return this.routerManager.urlHasJob();
  }

  urlHasProfitEstimate():boolean{
    return this.routerManager.urlHasProfitEstimate();
  }

  urlHasMain():boolean{
    return this.routerManager.urlHasMain();
  }

}

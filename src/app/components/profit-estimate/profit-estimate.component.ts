import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profit-estimate',
  standalone: false,
  templateUrl: './profit-estimate.component.html',
  styleUrl: './profit-estimate.component.css'
})
export class ProfitEstimateComponent implements OnInit {

  ngOnInit(): void {
    console.log('Im loaded')
  }

}

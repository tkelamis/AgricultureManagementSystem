import { Component, Input } from '@angular/core';
import { Job } from '../../../objects/job';

@Component({
  selector: 'app-irrigation',
  standalone: false,
  templateUrl: './irrigation.component.html',
  styleUrl: './irrigation.component.css'
})
export class IrrigationComponent {
  @Input() job?: Partial<Job>;


  
}

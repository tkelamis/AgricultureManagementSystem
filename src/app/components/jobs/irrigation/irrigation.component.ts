import { Component, Input } from '@angular/core';
import { Job } from '../../../objects/job';
import { fadeIn } from '../../../shared/animations';

@Component({
  selector: 'app-irrigation',
  standalone: false,
  templateUrl: './irrigation.component.html',
  styleUrl: './irrigation.component.css',
  animations: [fadeIn]
})
export class IrrigationComponent {
  @Input() job?: Partial<Job>;


  
}

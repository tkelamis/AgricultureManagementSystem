import { Component, Input } from '@angular/core';
import { fadeIn } from '../../../../shared/animations/fadeIn';
import { Job } from '../../../../core/models/job';

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

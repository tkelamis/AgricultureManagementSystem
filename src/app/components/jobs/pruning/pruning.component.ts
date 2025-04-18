import { Component, Input } from '@angular/core';
import { Job } from '../../../objects/job';
import { fadeIn } from '../../../shared/animations';

@Component({
  selector: 'app-pruning',
  standalone: false,
  templateUrl: './pruning.component.html',
  styleUrl: './pruning.component.css',
  animations: [fadeIn]
})
export class PruningComponent {
  @Input({required:true}) job?: Partial<Job>;
}

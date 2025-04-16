import { Component, Input } from '@angular/core';
import { Job } from '../../../objects/job';

@Component({
  selector: 'app-pruning',
  standalone: false,
  templateUrl: './pruning.component.html',
  styleUrl: './pruning.component.css'
})
export class PruningComponent {
  @Input({required:true}) job?: Partial<Job>;
}

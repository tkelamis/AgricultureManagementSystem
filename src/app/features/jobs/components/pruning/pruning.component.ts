import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from '../../../../shared/animations/fadeIn';
import { Job } from '../../../../core/models/job';

@Component({
  selector: 'app-pruning',
  standalone: false,
  templateUrl: './pruning.component.html',
  styleUrl: './pruning.component.css',
  animations: [fadeIn]
})
export class PruningComponent implements OnInit {
  
  @Input({required:true}) job?: Partial<Job>;

  constructor(){}

  ngOnInit(): void {
    
  }
}

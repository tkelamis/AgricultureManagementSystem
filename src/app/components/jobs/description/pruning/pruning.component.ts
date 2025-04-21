import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from '../../../../shared/animations';
import { Job } from '../../../../objects/job';

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

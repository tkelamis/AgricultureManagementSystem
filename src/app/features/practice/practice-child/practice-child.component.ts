import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-child',
  standalone: false,
  templateUrl: './practice-child.component.html',
  styleUrl: './practice-child.component.css'
})
export class PracticeChildComponent implements OnInit {
  ngOnInit() {
    // Throwing error after the component is loaded
    throw new Error('Crash during initialization!')}
}

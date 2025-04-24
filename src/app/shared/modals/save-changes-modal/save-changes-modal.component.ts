import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-changes-modal',
  standalone: false,
  templateUrl: './save-changes-modal.component.html',
  styleUrl: './save-changes-modal.component.css'
})
export class SaveChangesModalComponent {
  @Output() decision = new EventEmitter<boolean>();
  isVisible = false;

  open(){
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  confirmLeave() {
    this.decision.emit(true);
    this.close();
  }

  cancelLeave() {
    this.decision.emit(false);
    this.close();
  }
}

import { Component, ViewChild } from '@angular/core';
import { SaveChangesModalComponent } from '../../../../shared/modals/save-changes-modal/save-changes-modal.component';

@Component({
  selector: 'app-add-job',
  standalone: false,
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {

  @ViewChild(SaveChangesModalComponent) SaveChangesModal!: SaveChangesModalComponent;

  private pendingResolve!: (value: boolean) => void;

  canDeactivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.pendingResolve = resolve;
      this.SaveChangesModal.open();
    });
  }

  onDecision(leave: boolean) {
    this.pendingResolve(leave);
  }
}

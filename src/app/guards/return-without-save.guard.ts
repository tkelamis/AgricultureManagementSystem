import { CanDeactivateFn } from '@angular/router';
import { SaveChangesModalComponent } from '../components/modals/save-changes-modal/save-changes-modal.component';

let modalComponentRef: SaveChangesModalComponent | null = null;

export function setModalRef(ref: SaveChangesModalComponent) {
  modalComponentRef = ref;
}

export const returnWithoutSaveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  console.log('Im here')
  return true;
};

import { CanDeactivateFn } from '@angular/router';
import { AddJobComponent } from '../components/jobs/add-job/add-job.component';


export const returnWithoutSaveGuard: CanDeactivateFn<AddJobComponent> = (component) => {
  if(component.canDeactivate){
    return component.canDeactivate();
  }
  else{
    return true;
  }
};

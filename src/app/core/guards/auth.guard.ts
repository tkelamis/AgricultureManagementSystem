import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userManager = inject(UserService);
  const routerManager = inject(Router)
  if(userManager.userName){
    return true;
  }
  else{

    routerManager.navigate(['main/accessNotGranted']);
    return false;
  }
};

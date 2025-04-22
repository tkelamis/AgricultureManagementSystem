import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { RouteService } from './services/route.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userManager = inject(UserService);
  const routerManager = inject(Router)
  console.log('authGuard triggered for route:', route.routeConfig);
  routerManager.navigate(['main/accessNotGranted']);
  return userManager.userName ? true : false;
};

import {RouterModule} from '@angular/router';

import { HomeComponent } from './public_user/home/home.compenent';

export const routing = RouterModule.forRoot([
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]);

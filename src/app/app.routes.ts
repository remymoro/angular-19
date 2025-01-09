import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage.component';
import { UsersComponent } from './components/users.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];

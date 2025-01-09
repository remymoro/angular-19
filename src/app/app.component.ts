import { Component } from '@angular/core';
import { HomepageComponent } from './components/homepage.component';
import { UsersComponent } from './components/users.component';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="mb-20">Root component</h1>
    <nav class="flex gap-16 mb-20">
      <li>Homepage</li>
      <li>Users</li>
    </nav>
    <app-homepage></app-homepage>
    <app-users></app-users>
  `,
  imports: [HomepageComponent, UsersComponent],
})
export class AppComponent {}

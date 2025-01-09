import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="mb-20">Root component</h1>
    <nav class="flex gap-16 mb-20">
      <li>Homepage</li>
      <li>Users</li>
    </nav>

    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
})
export class AppComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
        max-width: 900px;
        margin: auto;
        padding: 24px;
        gap: 24px;
      }
    `,
  ],
  template: `
    <div class="w-half">
      <form class="flex flex-col mb-10">
        <div class="flex flex-col mb-10">
          <label for="lastname">Nom</label>
          <input type="text" id="lastname" />
        </div>
        <div class="flex flex-col mb-10">
          <label for="firstname">Prénom</label>
          <input type="text" id="firstname" />
        </div>
        <div class="flex flex-col mb-10">
          <label for="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div class="flex flex-col mb-20">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" />
        </div>
        <button class="btn btn-primary">Sauvegarder</button>
      </form>
    </div>
  `,
})
export class AppComponent {}

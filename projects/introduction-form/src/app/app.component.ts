import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
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
    <form [formGroup]="userForm" (submit)="submit()" class="w-half">
      <div class="flex flex-col mb-10">
        <label for="lastname">Nom</label>
        <input formControlName="lastname" type="text" id="lastname" />
      </div>
      <div class="flex flex-col mb-10">
        <label for="firstname">Prénom</label>
        <input formControlName="firstname" type="text" id="firstname" />
      </div>
      <div class="flex flex-col mb-10">
        <label for="email">Email</label>
        <input formControlName="email" type="text" id="email" />
      </div>
      <div class="flex flex-col mb-20">
        <label for="password">Mot de passe</label>
        <input formControlName="password" type="password" id="password" />
      </div>
      <button class="btn btn-primary">Sauvegarder</button>
    </form>
    <pre class="w-half">{{ userForm.value | json }}</pre>
  `,
})
export class AppComponent {
  userForm = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    console.log(this.userForm.value);
  }
}

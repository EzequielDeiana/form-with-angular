import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{

  careers = ['Psychology', 'Medicine', 'Systems', 'Accountancy']

  model = new User(1,'John Doe', this.careers[0], 'Universidad de Buenos Aires');

  submitted = false;

   onSubmit(){ this.submitted = true; }

  newUser() {
    this.model = new User(2,'','','');
  }

}

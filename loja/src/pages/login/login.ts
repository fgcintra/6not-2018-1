import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'login-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public auth: AuthService
  ) {}

}

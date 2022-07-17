import { Component } from '@angular/core';
import {LoginPayload} from "../../models/payloads/login.payload";
import {AlertController} from "@ionic/angular";
import {HelperService} from "../../services/helper.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(
    private readonly helper: HelperService
  ) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: ''
  }

  public isLoading: boolean = false;

  public async login(): Promise<void>{
    if(!this.canLogin()) return;

    this.isLoading = true;

    await this.helper.showToast("Logando...");

    await this.helper.showAlert('Hello World', [{
      text: 'Ok,',
      handler: () => console.log('Ok!'),
    }, {
      text: 'Outro,',
      handler: () => console.log('Outro!'),
    }]);

    console.log(this.loginPayload)
  }


  public canLogin(): boolean{

    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email);

    return emailIsValid && this.loginPayload.password.length >= 6;
  }

  public logoClick($event: boolean): void {
    console.log($event);
  }
}

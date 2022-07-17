import {Injectable} from "@angular/core";
import {AlertButton, AlertController, ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root',
})

export class HelperService {

  constructor(private readonly toastController: ToastController,
              private readonly alertController: AlertController) {
  }

  public async showToast(message: string, duration: number = 2000): Promise<void> {
    //toast
    const toast = await this.toastController.create({
      message,
      duration
    })
    await toast.present();
  }

  public async showAlert(header: string, buttons: (AlertButton | string)[]): Promise<void>
  {
    const alert = await this.alertController.create({
      header,
      buttons,
    })

    await alert.present();
  }
}

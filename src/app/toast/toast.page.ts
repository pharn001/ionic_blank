import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastController:ToastController) { }

  ngOnInit() {
  }
 
    isToastOpen = false;
  
    setOpen(isOpen: boolean) {
      this.isToastOpen = isOpen;
    }

    // ກົດແລ້ວມັນຈະເລ່ື່ອນລົງມາຈາກເທິງ
    async onClickToast(potection:'top' | 'middle'|'bottom' ){
      const a= await this.toastController.create({
        message:"t huk h y u ❤️❤️",
        duration: 3000,
        position:potection,
      });
      await a.present();
    }
}

import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {
 
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  public shouldOpen = false;
  

  settingsComponent() {
    if(this.shouldOpen) this.shouldOpen = false;
    else this.shouldOpen = true;
  }

  closePopOver(){
    this.popoverController.dismiss();
  }
  signout() {
   console.warn('signout');
  }


}

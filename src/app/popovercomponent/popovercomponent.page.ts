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
  public groupBool = false;
  createGroup(){
     if(this.groupBool) this.groupBool = false;
     else this.groupBool = true;
  }


}

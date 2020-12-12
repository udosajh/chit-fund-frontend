import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSegment, IonSlides, PopoverController } from "@ionic/angular";
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  @ViewChild("slider", { read: undefined, static: false }) slider: IonSlides;
  @ViewChild("segment", { read: undefined, static: false }) segment: IonSegment;
  slideOpts = {
    initialSlide: 1,
    speed: 100
  };
  public shouldOpen = false;
  openChildComponent(){
//      if(this.shouldOpen ) this.shouldOpen= false;
//      else this.shouldOpen = true;
// console.warn(this.shouldOpen);
  }

  constructor(public popoverController: PopoverController) {}
  createPopOver() {
    this.popoverController.create({component: PopovercomponentPage, showBackdrop: false}).then((popoverElement) => {
      popoverElement.present();
    })
  }
  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: PopoverComponentComponent,
  //     cssClass: 'my-custom-class',
  //     event: ev,
  //     translucent: true
  //   });
  //   console.warn('pop open');
  //   return await popover.present();
  // }

  ngOnInit() {}

  async segmentChanged(event: any) {
    // get the id of the current slide as number
    const slideId = +(event.detail.value as string).replace("ion-sb-", "");
    // slide to the selected segment
    await this.slider.slideTo(slideId, 100);
  }

  async slideChanged() {
    // set the segment to the active slide
    this.segment.value =
      "ion-sb-" + (await this.slider.getActiveIndex()).toString();
  }
}

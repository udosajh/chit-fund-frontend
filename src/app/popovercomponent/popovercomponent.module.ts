import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopovercomponentPageRoutingModule } from './popovercomponent-routing.module';

import { PopovercomponentPage } from './popovercomponent.page';
import { SettingsComponent } from '../components/settings/settings.component';
import { SignoutComponent } from '../components/signout/signout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopovercomponentPageRoutingModule
  ],
  declarations: [PopovercomponentPage, SettingsComponent, SignoutComponent]
})
export class PopovercomponentPageModule {}

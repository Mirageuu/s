import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OvernightSleepPage } from './overnightSleep.page';

import { OvernightSleepPageRoutingModule } from './overnightSleep-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvernightSleepPageRoutingModule
  ],
  declarations: [OvernightSleepPage]
})
export class OvernightSleepPageModule {}

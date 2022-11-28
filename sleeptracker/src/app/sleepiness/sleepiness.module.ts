import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SleepinessPage } from './sleepiness.page';

import { SleepinessPageRoutingModule } from './sleepiness-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepinessPageRoutingModule
  ],
  declarations: [SleepinessPage]
})
export class SleepinessPageModule {}

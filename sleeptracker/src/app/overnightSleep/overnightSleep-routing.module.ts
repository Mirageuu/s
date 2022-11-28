import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OvernightSleepPage } from './overnightSleep.page';

const routes: Routes = [
  {
    path: '',
    component: OvernightSleepPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OvernightSleepPageRoutingModule {}

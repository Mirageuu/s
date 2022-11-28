import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SleepinessPage } from './sleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: SleepinessPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SleepinessPageRoutingModule {}

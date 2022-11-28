import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(public sleepService:SleepService) {
		
	}

	ngOnInit() {
	}

	get OvernightDatas() {
		return SleepService.AllOvernightData;
	}
	get SleepinessDatas() {
		return SleepService.AllSleepinessData;
	}

}

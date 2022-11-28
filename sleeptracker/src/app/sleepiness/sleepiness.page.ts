import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: 'sleepiness.page.html',
  styleUrls: ['sleepiness.page.scss'],
})
export class SleepinessPage {
	selected:number = 8;
	private stanfordSleepinessData:StanfordSleepinessData;
	constructor(private sleepService:SleepService, private alertController: AlertController) {
	}

	async presentAlert() {
		const alert = await this.alertController.create({
			message: 'Sleepiness Level Added',
			buttons: ['OK']
		});

		await alert.present();
	}

	async presentAlert2() {
		const alert = await this.alertController.create({
			message: 'Please select a level',
			buttons: ['OK']
		});

		await alert.present();
	}


	sleepinessSubmit() {
		if (this.selected == 8){
			this.presentAlert2();
		}else{
		this.stanfordSleepinessData = new StanfordSleepinessData(this.selected);
		this.stanfordSleepinessData.date = this.stanfordSleepinessData.dateString();
		this.stanfordSleepinessData.summary = this.stanfordSleepinessData.summaryString();
		this.sleepService.logSleepinessData(this.stanfordSleepinessData);

		this.presentAlert();
		}
	}
}

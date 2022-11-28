import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { format, parseISO } from 'date-fns';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-overnightSleep',
  templateUrl: 'overnightSleep.page.html',
  styleUrls: ['overnightSleep.page.scss'],
})
export class OvernightSleepPage {
	showPicker = false;
	showPickerwake = false;
	dateValue = format(new Date(),'yyyy-MM-dd') + 'T00:00';
	dateValuewake = format(new Date(),'yyyy-MM-dd') + 'T00:00';

	private overnightSleepData:OvernightSleepData;

	formattedString = '';
	formattedStringwake = '';

	constructor(public sleepService:SleepService, private alertController: AlertController) {
		this.setToday();
	}

	async presentAlert() {
		const alert = await this.alertController.create({
			message: 'Sleep Log Added',
			buttons: ['OK']
		});

		await alert.present();
	}

	async presentAlert2() {
		const alert = await this.alertController.create({
			message: 'Please check input and try again',
			buttons: ['OK']
		});

		await alert.present();
	}

	setToday(){
		this.formattedString = format(new Date(), 'yyyy-MM-dd') + 'T00:00';
		this.formattedStringwake = format(new Date(), 'yyyy-MM-dd') + 'T00:00';
	}

	dateChanged(value){
		this.dateValue = value;
		this.formattedString = format(parseISO(value), "HH:mm, MMM d")
		this.showPicker = false;
	}

	dateChangedwake(value){
		this.dateValuewake = value;
		this.formattedStringwake = format(parseISO(value), "HH:mm, MMM d")
		this.showPickerwake = false;
	}


	overnightSleepSubmit() {
		if (this.dateValue < this.dateValuewake) {
			this.overnightSleepData = new OvernightSleepData(new Date(parseISO(this.dateValue)), new Date(parseISO(this.dateValuewake)));
			this.overnightSleepData.date = this.overnightSleepData.dateString();
			this.overnightSleepData.time = this.overnightSleepData.summaryString();
			this.sleepService.logOvernightData(this.overnightSleepData);
			this.presentAlert();
		}
		else {
			this.presentAlert2();
		}
		
	}
}

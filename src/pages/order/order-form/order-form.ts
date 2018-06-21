import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-order-form',
  templateUrl: 'order-form.html',
})
export class OrderFormPage {

  constructor(private navParams: NavParams) {  }


  ionViewDidEnter(){

    console.log(this.navParams.get('type'));

  }

}
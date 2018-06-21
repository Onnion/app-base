import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-view',
  templateUrl: 'order-view.html',
})
export class OrderViewPage {
  order: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter () {
    this.order = this.navParams.get('order');
    console.log(this.order)
  }

  ionViewDidLoad () {
  }
 
  defineIcon (order: any) {
    return order.type === 1 ? 'cart' : 'basket';
  }

  backPress () {
    this.navCtrl.pop();
  }

}

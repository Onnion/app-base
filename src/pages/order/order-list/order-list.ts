import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderFormPage } from '../order-form/order-form';
import { OrderViewPage } from '../order-view/order-view';

import * as moment from 'moment';

@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {

  private clicked: boolean = false;
  public orders: any;

  constructor(public navCtrl: NavController) { }


  private destroyAnimation() {
    const divs = document.querySelectorAll('.active');
    if (divs.length > 1) {
      divs[0].classList.remove('active');
      divs[1].classList.remove('active');
      divs[2].classList.remove('active');
    }
  }


  private calculateDaysDifference (order, type: string) {
    const date = order.date;  
    return type === 'date' ? moment(date).diff(moment(), 'days') : moment(date).diff(moment(), 'hours');
  }


  loadData () {
    this.orders = [
      {phone: '81 3429 5814', type: 0, title: 'marCio henrique', date: '2018-07-19 02:30:00', price: '1,250.24',
        kit: { name: 'Kit 2' }, products: [
          {id: 1, name: 'coxinha', amount: 20},
          {id: 1, name: 'bolinho_de_queijo', amount: 20},
          {id: 1, name: 'empada', amount: 20},
          {id: 1, name: 'brigadeiro', amount: 20}
        ]
      },
      {phone: '81 3429 5814', type: 1, title: 'Fernando Pedro',  date: '2018-06-19 02:30:00', price: '250.50',
        products: [
          {id: 1, name: 'coxinha', amount: 20},
          {id: 1, name: 'bolinho_de_queijo', amount: 20},
          {id: 1, name: 'empada', amount: 20},
          {id: 1, name: 'brigadeiro', amount: 20}
        ]}
    ]
  }


  ionViewDidEnter () {
    this.loadData();
    this.clicked = false;
    this.destroyAnimation();
  }


  defineBackgroundChip (order: any, type: string) {
    let color: string;
    const daysDifference = this.calculateDaysDifference(order, type);
    if (daysDifference <= 1) {
      color =  '#FF0000';
    } else if (daysDifference >= 2 && daysDifference <= 3) {
      color = '#ca9503';
    } else {
      color =  '#dbdbdb';
    }
    return color;
  }


  defineColorChip (order: any, type: string) {
    let color: string;
    const daysDifference = this.calculateDaysDifference(order, type);
    if (daysDifference <= 1 || daysDifference == 2) {
      color =  '#ffffff';
    } else {
      color =  'rgba(0, 0, 0, 0.87)';
    }
    return color;
  }


  
  defineIcon (order: any) {
    return order.type === 1 ? 'cart' : 'basket';
  }


  /**
   * navega para a tela de order-form
   * 
   * @param type (number)
   */
  toForm(type: number) {
    this.navCtrl.push(OrderFormPage, {type});

  }


  /**
   * verifica se algum card já foi clicado
   * adiciona animação e navega para a pagina de order-view
   * 
   * @param  $event (any)
   * @param order (any) 
   */
  toView($event: any, order: any) {
    if(!this.clicked) {
      this.clicked = true;
      this.addAnimation($event.target);


      setTimeout( () => {
        this.navCtrl.push(OrderViewPage, {order});
        this.destroyAnimation();
      }, 950)

    };

  }


  /**
   * procura o node ION-CARD pai do elemento clicado
   * 
   * @param target (HTMLElement)
   */
  private getIonCard (target: HTMLElement): HTMLElement {

    let ionCard;
    switch (target.nodeName) {
      case 'ION-CARD-CONTENT':
        ionCard = target.parentNode;
        break;

      case 'ION-CHIP':
        ionCard = target.parentNode.parentNode;
        break;
    
      case 'ION-CARD-TITLE':
        ionCard = target.parentNode.parentNode;
        break;

      case 'P':
        ionCard = target.parentNode.parentNode;
        break;

      case 'ION-LABEL':
        ionCard = target.parentNode.parentNode.parentNode;
        break;

      case 'ION-ICON':
        ionCard = target.parentNode.parentNode.parentNode.parentNode;
        break;

      default:
        break;
    }

    return ionCard;

  }


  /**
   * adiciona a classe active nos backgrounds do card
   * 
   * @param target (HTMLElement)
   */
  private addAnimation (target: HTMLElement) {

    const ionCard = this.getIonCard(target);
    ionCard.classList.add('active');
    ionCard.children[1].classList.add('active');
    ionCard.children[2].classList.add('active');

  }

}

import { Component } from '@angular/core';

import { OrderListPage } from '../order/order-list/order-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  orderList = OrderListPage;

  constructor() {

  }
}

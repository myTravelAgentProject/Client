import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  constructor(private _orderService:OrdersService) { }

  ngOnInit(): void {
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderDTO } from 'src/app/models/OrderDTO.model';
import { CustomerDialogComponent } from '../../customer/customer-dialog/customer-dialog.component';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {

  orderID!: number;

  constructor( public dialogRef: MatDialogRef<CustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrderDTO) { }

  ngOnInit(): void {
    this.orderID = this.data.id;
  }
  onOrderBtnClikced(){
    this.dialogRef.close(true)
  }
  onCloseBtnClicked(){
    this.dialogRef.close(false)
  }

}

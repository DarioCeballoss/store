import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shoping-card.service';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
  <span> My store</span>
  {{quantity$|async|json}} - Quantity
  {{total$|async|json}} - Total
  {{cart$|async|json}} - Cart

  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  quantity$ = this.shoppingCartSvc.quantityActions$;
  total$ = this.shoppingCartSvc.totalActions$;
  cart$ = this.shoppingCartSvc.cartActions$;

  constructor(private shoppingCartSvc: ShoppingCartService){}
  }

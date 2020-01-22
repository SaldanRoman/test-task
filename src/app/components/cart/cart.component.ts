import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  romoveFromCart(idx: number) {
    this.cartService.removeFromCart(idx);
    this.cartService.getSum();
    this.cartService.updateCartCount();
  }

  countOfProduct(idx:number, action:string) {
    this.cartService.changePrice(idx, action)
  }


  ngOnInit() {
    this.cartService.getSum()
  }
}

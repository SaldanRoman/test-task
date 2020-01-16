import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartCountService } from '../services/cartcount.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cart: CartService, private cartCount: CartCountService) { }
  
  romoveFromCart(idx:number){ 
    this.cart.removeFromCart(idx)
    this.cartCount.update();
    this.cart.getSum()
  }

  ngOnInit() {
    this.cart.getSum()
  }


}

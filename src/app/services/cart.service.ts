import { Injectable } from "@angular/core";

import { Product } from './products.service';

@Injectable({
    providedIn: 'root'
})

export class CartService {
  cartProducts: Product[] = [];
  sum: number = 0;
  cartCount = 0;

  constructor() {
    if (!JSON.parse(localStorage.getItem('cartProds'))) {
      localStorage.setItem('cartProds', JSON.stringify(this.cartProducts));
    } else {
      this.getFromLocalStoage();
    }
  }
  getFromLocalStoage() {
    this.cartProducts = JSON.parse(localStorage.getItem('cartProds'));
  }
  postToLocalStorage() {
    localStorage.setItem('cartProds', JSON.stringify(this.cartProducts));
  }

  addToCart(productsObj: Product) {
    this.cartProducts.push(productsObj);
    this.postToLocalStorage();
  }

  removeFromCart(index: number) {
    this.cartProducts.splice(index, 1);
    this.postToLocalStorage();
  }

  getSum() {
    this.sum = 0;
    this.cartProducts.forEach(elm => this.sum += elm.price);
  }

  updateCartCount() {
    this.cartCount = JSON.parse(localStorage.getItem('cartProds')).length
  }

  changePrice(idx: number, action:string) {
    if (this.cartProducts[idx].fixPrice === undefined) {
      this.cartProducts[idx].fixPrice = this.cartProducts[idx].price;
      this.cartProducts[idx].count = 1;
    }

    if(action === '+') {
      this.cartProducts[idx].price += this.cartProducts[idx].fixPrice;
      this.cartProducts[idx].count++;
    }

    if (action === '-') {
      if (this.cartProducts[idx].count <= 1) {return}
      this.cartProducts[idx].price -= this.cartProducts[idx].fixPrice;
      this.cartProducts[idx].count--;
    }
    this.postToLocalStorage();
    this.getSum()
  }

  }
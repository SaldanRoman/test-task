import { Injectable } from "@angular/core";
import { Product } from './products.service'

@Injectable({
    providedIn: 'root'
})

export class CartService{
    cartProducts: Product[] = [];
    sum: number = 0;
    cartCount = 0;
    
    constructor() {
        if(! JSON.parse(localStorage.getItem('cartProds')) ){
            localStorage.setItem('cartProds', JSON.stringify(this.cartProducts))
        } else {
            this.getFromLocalStoage()
        }
    }
    getFromLocalStoage() {
        this.cartProducts = JSON.parse(localStorage.getItem('cartProds'))
    }
    postToLocalStorage() {
        localStorage.setItem('cartProds', JSON.stringify(this.cartProducts) )
    }

    addToCart(productsObj: Product) {
        this.cartProducts.push(productsObj);
        this.postToLocalStorage()
    }

    removeFromCart(index:number) {
        this.cartProducts.splice(index,1);
        this.postToLocalStorage()
    }

    getSum() {
        this.sum = 0;
        this.cartProducts.forEach(elm=> this.sum+=elm.price);
    }

    updateCartCount() {
        this.cartCount = JSON.parse(localStorage.getItem('cartProds')).length
    }

}
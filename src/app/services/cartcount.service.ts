import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CartCountService {
    cartCount = 0
    update() {
        this.cartCount = JSON.parse(localStorage.getItem('cartProds')).length
    }
}
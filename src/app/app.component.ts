import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor(private cartService: CartService) {}
  title = 'test-task';

  ngOnInit() {
    this.cartService.updateCartCount()
  }
}

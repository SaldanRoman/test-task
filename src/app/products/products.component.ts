import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductsService, Product} from '../services/products.service';
import { CartService } from '../services/cart.service';
import { CartCountService } from '../services/cartcount.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []
  constructor(private productsJson: ProductsService, private cartProducts: CartService, private cartCount: CartCountService) { 
    productsJson.fetchProducts().subscribe(resp => this.products = resp)
  }

  ngOnInit() {
  }

  addProductToCart(id:number) {
    const selectedProduct = this.products.find((element)=> element.id === id);
    this.cartProducts.addToCart(selectedProduct);
    this.cartCount.update()
  }
}

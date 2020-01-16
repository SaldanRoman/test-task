import { Component, OnInit } from '@angular/core';
import { CartCountService } from './services/cartcount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private cartCount: CartCountService) { }
  title = 'test-task';
  
  ngOnInit() {
    this.cartCount.update()
  }
}

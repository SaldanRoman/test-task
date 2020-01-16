import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
    id: number,
    name: string,
    label: string,
    price: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public fetchProducts(): Observable < Product[] > {
    return this.http.get < Product[] > ('assets/products.json')
  }
}
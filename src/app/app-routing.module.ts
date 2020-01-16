import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    imports:[RouterModule.forRoot([
        {path: '', component: ProductsComponent},
        {path: 'cart', component: CartComponent}
    ])],
    exports: [RouterModule]
})

export class AppRouterModule {}
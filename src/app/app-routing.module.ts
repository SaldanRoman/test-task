import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    imports:[RouterModule.forRoot([
        {path: '', component: ProductsComponent},
        {path: 'cart', component: CartComponent}
    ])],
    exports: [RouterModule]
})

export class AppRouterModule {}
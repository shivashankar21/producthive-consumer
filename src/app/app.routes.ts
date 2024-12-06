import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CeateProductComponent } from './components/ceate-product/ceate-product.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';


export const routes: Routes = [
    {path:'products',component:ProductsComponent},
    {path:'add-product/:pid',component:CeateProductComponent},
    {path:'product-details/:pid',component:ProductdetailsComponent}



];

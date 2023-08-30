import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "customers", loadChildren: () => import('../app/components/customer/customer.module').then(m => m.CustomerModule) },
  { path: "products", loadChildren: () => import('../app/components/product/product.module').then(m => m.ProductModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

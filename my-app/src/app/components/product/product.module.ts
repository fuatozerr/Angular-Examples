import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';



@NgModule({
  declarations: [AddproductComponent,DeleteproductComponent,UpdateproductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"products/add",component:AddproductComponent
      },
      {
        path:"products/delete",component:DeleteproductComponent
      },
      {
        path:"products/add",component:UpdateproductComponent
      }
    ])
  ]
})
export class ProductModule { }

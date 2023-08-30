import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [AddComponent,DeleteComponent,UpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"customers/add",component:AddComponent
      },
      {
        path:"customers/delete",component:DeleteComponent
      },
      {
        path:"customers/update",component:UpdateComponent
      }
    ])
  ]
})
export class CustomerModule { }

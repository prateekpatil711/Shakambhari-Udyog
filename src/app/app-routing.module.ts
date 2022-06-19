import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { OurworkComponent } from './ourwork/ourwork.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { DecorativepoleComponent } from './decorativepole/decorativepole.component';
import { DescriptionComponent } from './description/description.component';



const routes: Routes = [
  { path: '' , component : DescriptionComponent },
  { path: 'ourwork' , component :  OurworkComponent},
  { path: 'product' , component : ProductComponent },
  { path: 'contact' , component : ContactComponent },
  { path: 'decorative' , component : DecorativepoleComponent },
  { path: 'home' , component :DescriptionComponent },
  { path: '**' , redirectTo : '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MenuComponent } from './menu/menu.component'
import { CartComponent} from './cart/cart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [ {path : '', component : LoginComponent},
						 {path : 'menu', component : MenuComponent},
						 {path : 'cart', component : CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

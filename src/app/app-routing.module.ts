import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '***', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '', canActivateChild: [AuthGuard],
      children: [
        { path: 'products', component: ProductsComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'categories', component: CategoriesComponent },
        { path: 'orders', component: OrdersComponent },
        { path: 'vendors', component: OrdersComponent },
        { path: 'createproduct', component: CreateProductComponent },
      ]
    }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

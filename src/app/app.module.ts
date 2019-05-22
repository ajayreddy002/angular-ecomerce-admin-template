import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule, MatToolbarModule, MatButtonModule,
   MatIconModule, MatListModule,
    MatBadgeModule, MatMenuModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesUserChartsComponent } from './sales-user-charts/sales-user-charts.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { HttpCrudServices } from './_services/http.services';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    LoginComponent,
    HomeComponent,
    SideNavComponent,
    DashboardComponent,
    SalesUserChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatMenuModule,
    MatCardModule,
    ChartsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    HttpCrudServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

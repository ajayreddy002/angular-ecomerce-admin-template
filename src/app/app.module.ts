import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {
  MatSidenavModule, MatToolbarModule, MatButtonModule,
  MatIconModule, MatListModule,
  MatBadgeModule, MatMenuModule, MatCardModule, MatTableModule,
  MatSortModule, MatPaginatorModule, MatDialogModule,
   MatFormFieldModule, MatSelectModule, MatOptionModule,
    MatInputModule, MatCheckboxModule, MatProgressSpinnerModule
} from '@angular/material';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesUserChartsComponent } from './sales-user-charts/sales-user-charts.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { HttpCrudServices } from './_services/http.services';
import { AddProductDialogComponent } from './products/dialogs/add.product.dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './products/create-product/create-product.component';
import {EditorModule} from '@progress/kendo-angular-editor';
import {ToolBarModule} from '@progress/kendo-angular-toolbar';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { FileUploadDirective } from './_directives/fileUploadDirective/file-upload.directive';
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
    SalesUserChartsComponent,
    AddProductDialogComponent,
    CreateProductComponent,
    FileUploadDirective,
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
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    EditorModule,
    ToolBarModule,
    DialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    HttpCrudServices,
  ],
  entryComponents: [AddProductDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { IProductDataModel } from '../_models/table.data.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productData: IProductDataModel[] = [
    {images: '/assets/logo2.svg', name: 'Product 1', description: 'testingh', price: 20, category: 'Products', rating: 8},
    {images: '/assets/logo2.svg', name: 'Product 2', description: 'testingh123', price: 20,
     category: 'Products12234567aassddsddsascdacdascasccascascascascascacsasc', rating: 8}
  ];
  displayedColumns: string[] = ['images', 'name', 'description', 'price', 'category', 'rating'];
  dataSource = new MatTableDataSource(this.productData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

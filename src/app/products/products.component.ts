import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { IProductDataModel } from '../_models/table.data.model';
import { AddProductDialogComponent } from './dialogs/add.product.dialog';
import { FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  addProductFields = [
    {
      formControlName: 'images',
      type: 'file',
      required: true,
      defaultValue: '',
      validationMessage: 'Please select product file',
      labele: 'Images'
    },
    {
      formControlName: 'product_name',
      type: 'text',
      required: true,
      defaultValue: '',
      validationMessage: 'Please enter product name',
      labele: 'Name'
    },
    {
      formControlName: 'product_description',
      type: 'textarea',
      required: true,
      defaultValue: '',
      validationMessage: 'Please enter product description',
      labele: 'Description'
    },
    {
      formControlName: 'price',
      type: 'text',
      required: true,
      defaultValue: '',
      validationMessage: 'Please enter product price',
      labele: 'Product Price'
    },
    {
      formControlName: 'rating',
      type: 'text',
      required: true,
      defaultValue: '',
      validationMessage: 'Please enter product rating',
      labele: 'Rating'
    },
    {
      formControlName: 'category',
      type: 'dropdown',
      required: true,
      defaultValue: '',
      validationMessage: 'Please select product category',
      labele: 'Category'
    },
  ];
  productData: IProductDataModel[] = [
    {
      images: '/assets/logo2.svg', name: 'Product 1',
      price: 20, rating: 8, quantity: 20
    },
    {
      images: '/assets/logo2.svg', name: 'Product 2', price: 20,
      rating: 8, quantity: 20
    }
  ];
  displayedColumns: string[] = ['select', 'images', 'name', 'price', 'rating', 'quantity', 'actions'];
  dataSource = new MatTableDataSource(this.productData);
  selection = new SelectionModel<IProductDataModel>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public dialog: MatDialog) {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IProductDataModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addProductDialog = () => {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '700px',
      height: '60vh',
      data: { action: 'add', addProductFields: this.addProductFields }
    });
    dialogRef.afterClosed().subscribe(
      data => {
        console.log('Dialog Closed');
      }
    );
  }
}

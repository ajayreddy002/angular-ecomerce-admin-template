import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { IProductDataModel2 } from '../_models/table.data.model';
import { FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpCrudServices } from '../_services/http.services';
import { AppConstants } from '../app.constants';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProductDataModel2[] = [];
  displayedColumns: string[] = ['select', 'images', 'name', 'price', 'quantity'];
  // dataSource: MatTableDataSource<IProductDataModel2>;
  dataSource = new MatTableDataSource<IProductDataModel2>(this.products);
  selection = new SelectionModel<IProductDataModel2>(true, []);
  // storageRef = firebase.storage().ref();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    public httpCrudService: HttpCrudServices
    ) {

  }

  ngOnInit() {
    this.getProducts();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getProducts = () => {
    this.httpCrudService.get(AppConstants.BASE_URL, 'get')
      .subscribe(
        data => {
          this.products = data;
          this.products.map(item => {
            item.ProductImages.map(item2 => {
              // tslint:disable-next-line:max-line-length
              item2.img_path = `https://storage.cloud.google.com/download/storage/v1/b/vmart-278cf.appspot.com/o/${item2.img_path}?_ga=2.134846513.-1917041880.1559219843`;
              item.product_img_path = item2.img_path;
            });
          });
          console.log(this.products);
          this.dataSource = new MatTableDataSource(this.products);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, err => {
          console.log(err);
        }
      );
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
  checkboxLabel(row?: IProductDataModel2): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.product_name + 1}`;
  }
}


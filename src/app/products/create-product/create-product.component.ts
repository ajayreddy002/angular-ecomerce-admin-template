import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { HttpCrudServices } from 'src/app/_services/http.services';
import { HttpHeaders } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  addProductForm: FormGroup;
  dialogOpened: boolean;
  @ViewChild('test') test: ElementRef;
  dropzoneActive = false;
  imgExtensions = ['PNG', 'png', 'jpg', 'JPG', 'jpeg', 'JPEG'];
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  imageData: any = [];
  productImagesForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpCrudServices
  ) { }

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      product_name: ['', Validators.required],
      product_category: ['', Validators.required],
      product_price: ['', Validators.required],
      product_quantity: ['', Validators.required],
      product_rating: ['', Validators.required],
      product_description: ['', Validators.required],
      stock_avilability: [],
      images: []
    });
    this.productImagesForm = this.formBuilder.group({
      images: []
    });
    this.filteredOptions = this.addProductForm.controls.product_category.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  openConfirmDialog = () => {
    this.dialogOpened = true;
  }
  public action(status) {
    console.log(`Dialog result: ${status}`);
    if (status === 'yes') {
      this.router.navigate(['home/products']);
    }
    this.dialogOpened = false;
  }
  public close(component) {
    this[component + 'Opened'] = false;
  }
  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }
  handleDrop(fileList: any) {
    for (const file of fileList) {
      const fileType = file.name.substr(-3);
      if (this.imgExtensions.includes(fileType)) {
        console.log('File Suported');
      } else {
        alert('err');
      }
    }
  }
  onChange = (fileList: any) => {
    console.log(this.test.nativeElement.value, 'change');
    for (const file of fileList) {
      const fileType = file.name.substr(-3);
      if (this.imgExtensions.includes(fileType)) {
        console.log('File Suported');
        file.path = this.test.nativeElement.value;
        this.uploadFileToServer(file);
        this.imageData.push(file);
      } else {
        alert('err');
      }
    }
  }
  uploadFileToServer = (fileData) => {
    // const formData = new FormData();
    // formData.append('images', fileData);
    // this.httpService.post('http://localhost:3000/', 'file', formData)
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //     }, err => {
    //       console.log(err);
    //     }
    //   );
  }
  addProductsToDb = () => {
    const formData = new FormData();
    this.imageData.map(item => {
      formData.append('images', item);
    });
    formData.append('product_name', this.addProductForm.controls.product_name.value);
    formData.append('product_category', this.addProductForm.controls.product_category.value);
    formData.append('product_description', this.addProductForm.controls.product_description.value);
    formData.append('product_quantity', this.addProductForm.controls.product_quantity.value);
    formData.append('product_rating', this.addProductForm.controls.product_rating.value);
    formData.append('product_price', this.addProductForm.controls.product_price.value);
    formData.append('stock_avilability', this.addProductForm.controls.stock_avilability.value);
    this.addProductForm.controls.images.setValue(formData);
    this.httpService.post(AppConstants.BASE_URL, 'add', formData)
      .subscribe(
        data => {
          console.log(data);
        }, err => {
          console.log(err);
        }
      );
  }
}

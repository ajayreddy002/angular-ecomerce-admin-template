import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  addProductForm: FormGroup;
  dialogOpened: boolean;
  dropzoneActive = false;
  imgExtensions = ['PNG', 'png', 'jpg', 'JPG', 'jpeg', 'JPEG'];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      product_name: ['', Validators.required],
      product_category: ['', Validators.required],
      product_price: ['', Validators.required],
      product_quantity: ['', Validators.required],
      product_rating: ['', Validators.required],
      product_description: ['', Validators.required],
    });
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
    console.log(fileList, 'change');
    for (const file of fileList) {
      const fileType = file.name.substr(-3);
      if (this.imgExtensions.includes(fileType)) {
        console.log('File Suported');
      } else {
        alert('err');
      }
    }
  }
}

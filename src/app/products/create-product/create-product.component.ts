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
    // const fileType = fileList[0].type.split('/');
    // fileList.map(item => {
    //   if (item.type.includes(this.imgExtensions)) {
    //     console.log('File Suported');
    //   } else {
    //     alert('dobbey');
    //   }
    // });
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < fileList.length; i++) {
      const fileType = fileList[i].type.split('/');
      if (fileType.includes(this.imgExtensions)) {
        console.log('File Suported');
      } else {
        alert('err');
      }
    }
    // if (fileList.type.includes(this.imgExtensions)) {}
  }
  onChange = (fileList: FileList) => {
    console.log(fileList, 'change');
  }
}

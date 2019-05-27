import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
    selector: 'app-add-product',
    templateUrl: '../../products/dialogs/add.product.dialog.html',
    styleUrls: ['../../products/dialogs/add.product.dialog.scss']
})
export class AddProductDialogComponent implements OnInit {
    addProductForm: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<AddProductDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit() {
        if (this.data.action === 'add') {
            const group: any = {};
            this.data.addProductFields.map(item => {
                group[item.formControlName] = item.required
                    ? new FormControl(item.defaultValue || '', Validators.required)
                    : new FormControl(item.defaultValue || '');
            });
            this.addProductForm = new FormGroup(group);
        }
    }
}

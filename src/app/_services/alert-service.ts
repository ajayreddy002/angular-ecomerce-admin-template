import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor(
        private matSnackBar: MatSnackBar
    ) { }
    show = (alert: string, action: string) => {
        this.matSnackBar.open(alert, action, {
            duration: 4000,
          });
    }
}

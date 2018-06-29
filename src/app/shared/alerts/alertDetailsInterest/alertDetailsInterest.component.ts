import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../../model/DialogData';

@Component({
  selector: 'app-alertDetailsInterest',
  templateUrl: './alertDetailsInterest.component.html',
  styleUrls: ['./alertDetailsInterest.component.css']
})

export class AlertComponentDetailsInterest {
  constructor(
    public dialogRef: MatDialogRef<AlertComponentDetailsInterest>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }
}

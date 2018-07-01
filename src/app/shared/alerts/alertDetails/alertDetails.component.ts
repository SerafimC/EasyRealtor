import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../../model/DialogData';

@Component({
  selector: 'app-alertDetails',
  templateUrl: './alertDetails.component.html',
  styleUrls: ['./alertDetails.component.css']
})

export class AlertComponentDetails {
  constructor(
    public dialogRef: MatDialogRef<AlertComponentDetails>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }
}

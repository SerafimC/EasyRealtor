import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../../model/DialogData';

@Component({
  selector: 'app-alertOKCancel',
  templateUrl: './alertOKCancel.component.html',
  styleUrls: ['./alertOKCancel.component.css']
})

export class AlertComponentOKCancel { 
  constructor(
    public dialogRef: MatDialogRef<AlertComponentOKCancel>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      
    }
}

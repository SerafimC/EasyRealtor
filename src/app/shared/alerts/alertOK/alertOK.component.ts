import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../../model/DialogData';

@Component({
  selector: 'app-alertOK',
  templateUrl: './alertOK.component.html',
  styleUrls: ['./alertOK.component.css']
})

export class AlertComponentOK { 
  constructor(
    public dialogRef: MatDialogRef<AlertComponentOK>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      
    }
}
